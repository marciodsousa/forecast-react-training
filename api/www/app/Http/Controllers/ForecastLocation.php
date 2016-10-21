<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\DailyForecast;
use App\CurrentForecast;
use App\ForecastLocationInstance;
use ForecastTools\Forecast;

use Illuminate\Http\Request;

class ForecastLocation extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		echo 'entered';
		$forecast  = new Forecast('012ed9cef6a1ad202c6ac6b45408e9f8');
		$response  = $forecast->getData(52.3702157, 4.8951679, null, 'ca', 'minutely,hourly,daily,alerts,flags', null, null);

		echo $response->getRawData()->timezone;
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$finalObj = $this->fetchLocationInfo($id);

		$uri2 = "https://api.darksky.net/forecast/012ed9cef6a1ad202c6ac6b45408e9f8/" . $finalObj->lat . "," . $finalObj->long . '?exclude=minutely,hourly,daily,alerts,flags&units=ca';
		$response2 = \Httpful\Request::get($uri2)->send();


		$finalObj -> timezone = $response2->body->timezone;

		$currentForecast = new CurrentForecast(array(
			'icon' => $response2->body->currently->icon,
			'summary' => $response2->body->currently->summary,
			'temperature' => $response2->body->currently->temperature,
			'humidity' => $response2->body->currently->humidity,
			'windSpeed' => $response2->body->currently->windSpeed,
			));

		$finalObj -> currentForecast = $currentForecast;
		
		return $finalObj;
	}

	public function listPast($name, $numberOfDays) {
		$finalObj = $this->fetchLocationInfo($name);

		$forecast  = new Forecast('012ed9cef6a1ad202c6ac6b45408e9f8');

		$requests = array();

		for ($x = 1; $x <= $numberOfDays; $x++) {
			$nextWeek = time() - ($x * 24 * 60 * 60);

			array_push($requests, array('latitude' => $finalObj->lat,
			 'longitude' => $finalObj->long,
			  'time' => date('U', $nextWeek),
			  'units' => 'ca',
			  'exclude' => 'currently,minutely,hourly,alerts,flags',
			  'extend' => null,
			  'callback' => null
			  ));
		}
		
		$responses = $forecast->getData($requests);

		$pastForecasts = array();

		foreach ($responses as $response) {
			if ($daily = $response->getDaily()) {
 				$daily = $daily[0];
				$time = date("d-m-Y", $daily->getTime());
				$temperatureMinTime = date("H:i", $daily->getTemperatureMinTime());
				$temperatureMaxTime = date("H:i", $daily->getTemperatureMaxTime());

				$dailyForecast = new DailyForecast(array(
							'time' => $time,
							'icon' => $daily->getIcon(),
							'summary' => $daily->getSummary(),
							'temperatureMin' => $daily->getTemperatureMin(),
							'temperatureMinTime' => $temperatureMinTime,
							'temperatureMax' => $daily->getTemperatureMax(),
							'temperatureMaxTime' => $temperatureMaxTime,
							'humidity' => $daily->getHumidity(),
							'windSpeed' => $daily->getWindSpeed(),
				));

				array_push($pastForecasts, $dailyForecast);
			}
		}

		return $pastForecasts;		
	}

	protected function fetchLocationInfo($location) {
		$uri = "https://maps.googleapis.com/maps/api/geocode/json?address=" . $this->treatLocationString($location) ."&key=AIzaSyDNw5kxIkzj-FXHh6tXyyfomrHViE2ySC4";
		$response = \Httpful\Request::get($uri)->send();

		$results = $response->body->results;
		$result = new ForecastLocationInstance(array(
			'name' => $location,
			'lat' => $results[0]->geometry->location->lat,
			'long' => $results[0]->geometry->location->lng
			));

		return $result;
	}

	protected function treatLocationString($location) {
		return str_replace(" ","%20",$location);
	}
}
