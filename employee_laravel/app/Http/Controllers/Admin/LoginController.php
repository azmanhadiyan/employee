<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    function index()
    {
        return view('login');
    }

    function login(Request $request)
    {
        $request->validate([
            'email'=>'required',
            'password'=>'required',
        ],[
            'email.required'=>'Email wajib diisi !!',
            'password.required'=>'Password wajib diisi !!',
        ]);

        $infologin = [
            'email'=>$request->email,
            'password'=>$request->password

        ];
        if(Auth::attempt($infologin)){
            if (Auth::user()->role == 'admin') {
                return redirect('admin/my_admin');
            }elseif (Auth::user()->role == 'operator') {
                return redirect('admin/my_operator');
            }
            return redirect('admin');
        }else {
            return redirect('')->withErrors('Username dan Password yang dimasukan tidak sesuai')->withInput();
        }
    }
    function logout()
    {
        Auth::logout();
        return redirect('');
    }
}
