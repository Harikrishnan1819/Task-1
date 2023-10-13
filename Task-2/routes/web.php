<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Crypt;


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

Route::get('/preview', function () {
    return view('preview');
});

Route::get('/agg', function () {
    return view('agg');
});


Route::get('/encrypt/{value}', function ($value) {
    $encryptedValue = Crypt::encrypt($value);
    return $encryptedValue;
});




Route::get('/decrypt/{value}', function ($value) {
    $decryptedValue = Crypt::decrypt($value);
    return $decryptedValue;
});
