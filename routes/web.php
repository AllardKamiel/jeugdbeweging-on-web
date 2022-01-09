<?php

use Illuminate\Support\Facades\Route;
//controllers
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ActiviteitController;
use App\Http\Controllers\ActiviteitCalenderController;
use App\Http\Controllers\KampterreinController;
use App\Http\Controllers\LokaalController;
use App\Http\Controllers\MateriaalController;
use App\Http\Controllers\ThemaZoekerController;




/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/home', [HomeController::class , 'showHome']);
Route::get('/activiteit', [ActiviteitController::class , 'showActiviteit']);
Route::get('/activiteit_detail', [ActiviteitController::class , 'showActiviteitDetail']);
Route::get('/activiteit_voegToe', [ActiviteitController::class , 'showActiviteitVoegToe']);
Route::get('/activiteitCalender', [ActiviteitCalenderController::class , 'showActiviteitCalender']);
Route::get('/activiteitCalender_voegToe', [ActiviteitCalenderController::class , 'showActiviteitCalenderVoegToe']);
Route::get('/kampterreinen', [KampterreinController::class , 'showKampterrein']);
Route::get('/lokaal', [LokaalController::class , 'showLokaal']);
Route::get('/materiaal', [MateriaalController::class, 'show']);
Route::get('/themazoeker', [ThemaZoekerController::class, 'show']);
Route::get('/materiaal/{materiaalnaam}', [MateriaalController::class, 'showMateriaal']);
