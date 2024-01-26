<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class UserAkses
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // if (auth()->user()->role == $role) {
        //     return $next($request);
        // }
        $roles = array_slice(func_get_args(), 2);

        foreach ($roles as $role) { 
            $user = \Auth::user()->role;
            if( $user == $role){
                return $next($request);
            }
        }
        \Session::flash('gagal','Maaf ini bukan ranah anda!');
        return back();
    }
}
