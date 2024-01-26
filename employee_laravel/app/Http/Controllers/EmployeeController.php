<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use App\Models\Admin\Departement;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $title = "Employee";
        $employees = Employee::all();
        
        return view('employees/index', compact('title','employees'));
    }

    public function create()
    {
        $title = "Create Employee";
        $departements = Departement::all();

        return view('employees/create', compact('title','departements'));
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'nik' => 'required|unique:employees',  
                'name' => 'required',      
                'address' => 'required',      
                'departement_id' => 'required',      
                'position' => 'required',      
                'date_of_birth' => 'required',      
                'gender' => 'required',      
                'entry_date' => 'required',      
                'status' => 'required',      
            ]);
            $data = $request->all();

            $employee = new Employee;
            $employee->nik = $request->nik;
            $employee->name = $request->name;
            $employee->address = $request->address;
            $employee->departement_id = $request->departement_id;
            $employee->position = $request->position;
            $employee->date_of_birth = $request->date_of_birth;
            $employee->gender = $request->gender;
            $employee->entry_date = $request->entry_date;
            $employee->status = $request->status;
            $employee->save();

            \Session::flash('sukses','Data berhasil ditambah');
            return redirect('employees');
        } catch (\Exception $e) {
            \Session::flash('gagal',$e->getMessage());
            return redirect()->back();
        }
        
    }

    public function edit($id)
    {
        $title = "Edit Employee";
        
        $employee = Employee::find($id);
        $departements = Departement::all();

        return view('employees/edit', compact('title','employee','departements'));
    }
    
    public function update(Request $request, $id)
    {
        $request->validate([
            'nik' => 'required',  
            'name' => 'required',      
            'address' => 'required',      
            'departement_id' => 'required',      
            'position' => 'required',      
            'date_of_birth' => 'required',      
            'gender' => 'required',      
            'entry_date' => 'required',      
            'status' => 'required',      
        ]);
        try {
            
            $data = $request->all();
            $employees = Employee::find($id);
            $employees->nik = $request->nik;
            $employees->name = $request->name;
            $employees->address = $request->address;
            $employees->departement_id = $request->departement_id;
            $employees->position = $request->position;
            $employees->date_of_birth = $request->date_of_birth;
            $employees->gender = $request->gender;
            $employees->entry_date = $request->entry_date;
            $employees->status = $request->status;
            $employees->save();

            \Session::flash('sukses','Data berhasil diedit');
            return redirect('employees');
        } catch (\Exception $e) {
            \Session::flash('gagal',$e->getMessage());
            return redirect()->back();
        }
    }

    public function show($id)
    {
        $title = "Detail Employee";
        
        $employee = Employee::find($id);
        $absensi = Absensi::where('employee_id',$id)->get();

        return view('employees/show', compact('title','employee','absensi'));
    }

    public function delete($id)
    {
        try {
            $Employee = Employee::find($id);
            $Employee->delete();

            \Session::flash('sukses','Data berhasil dihapus');
            return redirect('employees');
        } catch (\Exception $e) {
            \Session::flash('gagal',$e->getMessage());
            return redirect()->back();
        }
    }
}
