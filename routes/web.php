<?php

use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
//controllers
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ActiviteitController;
use App\Http\Controllers\ActiviteitCalenderController;
use App\Http\Controllers\KampterreinController;
use App\Http\Controllers\LokaalController;
use App\Http\Controllers\MateriaalController;
use App\Http\Controllers\ThemaZoekerController;
use App\Models\User;




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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/home', [HomeController::class , 'showHome']);
Route::redirect('/', '/home');
// Route::get('/activiteit', [ActiviteitController::class , 'showActiviteit']);
// Route::get('/activiteit_detail', [ActiviteitController::class , 'showActiviteitDetail']);
// Route::get('/activiteit_voegToe', [ActiviteitController::class , 'showActiviteitVoegToe']);
// Route::get('/activiteitCalender', [ActiviteitCalenderController::class , 'showActiviteitCalender']);
// Route::get('/activiteitCalender_voegToe', [ActiviteitCalenderController::class , 'showActiviteitCalenderVoegToe']);
// Route::get('/kampterreinen', [KampterreinController::class , 'showKampterrein']);
// Route::get('/lokaal', [LokaalController::class , 'showLokaal']);
// Route::get('/materiaal', [MateriaalController::class, 'show']);
// Route::get('/themazoeker', [ThemaZoekerController::class, 'show']);
// Route::get('/materiaal/{materiaalnaam}', [MateriaalController::class, 'showMateriaal']);

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::get('/auth/redirect', function () {
    return Socialite::driver('github')->redirect();
});

Route::get('/auth/callback', function () {
    $githubUser = Socialite::driver('github')->user();
    
    $user = User::where('github_id', $githubUser->id)->first();
    if ($user) {
        $user->update([
            'github_token' => $githubUser->token,
            'github_refresh_token' => $githubUser->refreshToken,
        ]);
    } else {
        $user = User::create([
            'name' => $githubUser->name,
            'email' => $githubUser->email,
            'github_id' => $githubUser->id,
            'github_token' => $githubUser->token,
            'github_refresh_token' => $githubUser->refreshToken,
        ]);
    }

    Auth::login($user);

    return redirect('/home');
});

//Route::middleware(['auth:sanctum', 'verified'])->get('/home', [HomeController::class , 'showHome']);
Route::middleware(['auth:sanctum', 'verified'])->get('/activiteit', [ActiviteitController::class , 'showActiviteit']);
Route::middleware(['auth:sanctum', 'verified'])->get('/activiteit_detail', [ActiviteitController::class , 'showActiviteitDetail']);
Route::middleware(['auth:sanctum', 'verified'])->get('/activiteit_voegToe', [ActiviteitController::class , 'showActiviteitVoegToe']);
Route::middleware(['auth:sanctum', 'verified'])->get('/activiteitCalender', [ActiviteitCalenderController::class , 'showActiviteitCalender']);
Route::middleware(['auth:sanctum', 'verified'])->get('/activiteitCalender_voegToe', [ActiviteitCalenderController::class , 'showActiviteitCalenderVoegToe']);
Route::middleware(['auth:sanctum', 'verified'])->get('/kampterreinen', [KampterreinController::class , 'showKampterrein']);
Route::middleware(['auth:sanctum', 'verified'])->get('/lokaal', [LokaalController::class , 'showLokaal']);
Route::middleware(['auth:sanctum', 'verified'])->get('/materiaal', [MateriaalController::class, 'show']);
Route::middleware(['auth:sanctum', 'verified'])->get('/themazoeker', [ThemaZoekerController::class, 'show']);
Route::middleware(['auth:sanctum', 'verified'])->get('/materiaal/{materiaalnaam}', [MateriaalController::class, 'showMateriaal']);
