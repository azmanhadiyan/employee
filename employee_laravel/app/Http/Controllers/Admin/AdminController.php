<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Absensi;
use App\Models\Admin\Departement;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    function index()
    {
        $total_karyawan = Employee::count();
        $total_leader = Employee::where('position','Leader')->count();
        $total_hadir = Absensi::where('status','Hadir')->count();
        $total_terlambat = Absensi::where('status','Terlambat')->count();
        $total_cuti = Absensi::where('status','Cuti')->count();
        $total_alfa = Absensi::where('status','Alfa')->count();
        return view('dashboard', compact('total_leader','total_karyawan','total_hadir','total_terlambat','total_cuti','total_alfa'));
    }


}
