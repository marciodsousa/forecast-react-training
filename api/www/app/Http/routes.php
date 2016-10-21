<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');

Route::get('test/{name}', function ($name) {
	echo 'asdasdasdasdasd' . $name;
});

Route::get('forecastlocation', 'ForecastLocation@index');
Route::get('forecastlocation/{name}', 'ForecastLocation@show');
Route::get('forecastlocation/{name}/pastdays/{numberOfDays}', 'ForecastLocation@listPast');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
