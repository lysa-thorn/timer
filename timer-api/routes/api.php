<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CagetoryController;
use App\Http\Controllers\ProductController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::get('user', 'user');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::controller(CagetoryController::class)->group(function () {
    Route::get('categories', 'index');
    Route::post('category', 'store');
    Route::get('category/{id}', 'show');
    Route::put('category/{id}', 'update');
    Route::delete('category/{id}', 'destroy');
});

Route::controller(ProductController::class)->group(function () {
    Route::get('products', 'index');
    Route::post('product', 'store');
    Route::get('product/{id}', 'show');
    Route::put('product/{id}', 'update');
    Route::delete('product/{id}', 'destroy');
});