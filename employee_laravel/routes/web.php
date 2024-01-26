<?php

use App\Http\Controllers\AbsensiController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\DepartementController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Route;

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

Route::middleware(['guest'])->group(function(){
    Route::get('/',[LoginController::class,'index'])->name('login');
    Route::post('/',[LoginController::class,'login']);
});

Route::get('/home',function(){
    return redirect('/admin');
});

Route::middleware(['auth'])->group(function(){
    Route::get('/dashboard',[AdminController::class,'index']);
    Route::get('/admin',[AdminController::class,'index']);
    Route::get('/admin/my_admin',[AdminController::class,'my_admin'])->middleware('userAkses:admin');
    Route::get('/admin/my_operator',[AdminController::class,'my_operator'])->middleware('userAkses:operator');

    Route::get('/admin/departements',[DepartementController::class,'index'])->middleware('userAkses:admin,operator');
    Route::get('/admin/departements/create',[DepartementController::class,'create'])->middleware('userAkses:admin');
    Route::post('/admin/departements/store',[DepartementController::class,'store'])->middleware('userAkses:admin');
    Route::get('/admin/departements/edit/{id}',[DepartementController::class,'edit'])->middleware('userAkses:admin');
    Route::get('/admin/departements/show/{id}',[DepartementController::class,'show'])->middleware('userAkses:admin,operator');
    Route::put('/admin/departements/update/{id}',[DepartementController::class,'update'])->middleware('userAkses:admin');
    Route::delete('/admin/departements/delete/{id}',[DepartementController::class,'delete'])->middleware('userAkses:admin');
    
    Route::get('/employees',[EmployeeController::class,'index'])->middleware('userAkses:operator,admin');
    Route::get('/employees/create',[EmployeeController::class,'create'])->middleware('userAkses:operator,admin');
    Route::post('/employees/store',[EmployeeController::class,'store'])->middleware('userAkses:operator,admin');
    Route::get('/employees/edit/{id}',[EmployeeController::class,'edit'])->middleware('userAkses:operator,admin');
    Route::get('/employees/show/{id}',[EmployeeController::class,'show'])->middleware('userAkses:operator,admin');
    Route::put('/employees/update/{id}',[EmployeeController::class,'update'])->middleware('userAkses:operator,admin');
    Route::delete('/employees/delete/{id}',[EmployeeController::class,'delete'])->middleware('userAkses:operator,admin');
    
    Route::get('/absensi',[AbsensiController::class,'index'])->middleware('userAkses:operator,admin');
    Route::get('/absensi/create',[AbsensiController::class,'create'])->middleware('userAkses:operator,admin');
    Route::post('/absensi/store',[AbsensiController::class,'store'])->middleware('userAkses:operator,admin');
    Route::get('/absensi/edit/{id}',[AbsensiController::class,'edit'])->middleware('userAkses:operator,admin');
    Route::put('/absensi/update/{id}',[AbsensiController::class,'update'])->middleware('userAkses:operator,admin');
    Route::delete('/absensi/delete/{id}',[AbsensiController::class,'delete'])->middleware('userAkses:operator,admin');
    
    Route::get('/logout',[LoginController::class,'logout']);
});