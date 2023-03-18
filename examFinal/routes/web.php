<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
//User Routes
Route::get('/home', [App\Http\Controllers\Frontend\FrontendController::class, 'home'])->name('home');
Route::get('/{category_slug}', [App\Http\Controllers\Frontend\FrontendController::class, 'products']);
Route::get('/{category_slug}/{product_id}', [App\Http\Controllers\Frontend\FrontendController::class, 'productPage']);


Route::prefix('admin')->middleware('auth', 'isAdmin')->group(function () {


    /*Route::get('dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'index']);*/

    //Category Route
    Route::get('dashboard', [App\Http\Controllers\Admin\CategoryController::class, 'index']);
    Route::get('category/create', [App\Http\Controllers\Admin\CategoryController::class, 'create']);
    Route::post('category', [App\Http\Controllers\Admin\CategoryController::class, 'store']);

    //Brand Route
    Route::get('/brand', [App\Http\Controllers\Admin\BrandController::class, 'index']);
    Route::get('/brand/create', [App\Http\Controllers\Admin\BrandController::class, 'create']);
    Route::post('/brand', [App\Http\Controllers\Admin\BrandController::class, 'store']);

    //Product Route
    Route::get('product', [App\Http\Controllers\Admin\ProductController::class, 'index']);
    Route::get('product/create', [App\Http\Controllers\Admin\ProductController::class, 'create']);
    Route::post('product', [App\Http\Controllers\Admin\ProductController::class, 'store']);
    Route::get('product/create', [App\Http\Controllers\Admin\ProductController::class, 'create']);
    Route::get('product/{product_id}/delete', [App\Http\Controllers\Admin\ProductController::class, 'destroy']);
    Route::get('product/{product_image_id}/delete', [App\Http\Controllers\Admin\ProductController::class, 'destroyImage']);


});