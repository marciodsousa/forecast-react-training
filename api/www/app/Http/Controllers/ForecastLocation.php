<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\DailyForecast;
use App\CurrentForecast;
use App\ForecastLocationInstance;

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

$response = new DailyForecast(array('name' => 'john'));
echo $response;
		return $response;
	}

	/**+
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$finalObj = new ForecastLocationInstance(array('name' => $id));

		//return $this.fetchMapsInfo($id);

		$uri = "https://maps.googleapis.com/maps/api/geocode/json?address=" . $id ."&key=AIzaSyDNw5kxIkzj-FXHh6tXyyfomrHViE2ySC4";
		$response = \Httpful\Request::get($uri)->send();
		$results = $response->body->results;

		$finalObj -> lat = $results[0]->geometry->location->lat;
		$finalObj -> long = $results[0]->geometry->location->lng;

		$uri2 = "https://api.darksky.net/forecast/012ed9cef6a1ad202c6ac6b45408e9f8/" . $results[0]->geometry->location->lat . "," . $results[0]->geometry->location->lng . '?exclude=minutely,hourly,daily,alerts,flags&units=ca';
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

	protected function fetchMapsInfo($location) {
		echo $location;
		$uri = "https://maps.googleapis.com/maps/api/geocode/json?address=" . $location ."&key=AIzaSyDNw5kxIkzj-FXHh6tXyyfomrHViE2ySC4";
		$response = \Httpful\Request::get($uri)->send();

		return $response->results[0];
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
