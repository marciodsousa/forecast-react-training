<?php namespace App;

use Jenssegers\Model\Model;

class CurrentForecast extends Model {

	protected $summary;
	protected $icon;
	protected $temperature;
	protected $humidity;
	protected $windspeed;
}
