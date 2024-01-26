<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use App\Models\Admin\Departement;
use App\Models\Employee;
use Illuminate\Http\Request;

class AbsensiController extends Controller
{
    public function index()
    {
        $title = "Absensi";
        $absensi = Absensi::all();
        
        return view('absensi/index', compact('title','absensi'));
    }

    public function create()
    {
        $title = "Create Absensi";
        $employees = Employee::all();

        return view('absensi/create', compact('title','employees'));
    }

    public function store(Request $request)
    {
        try {
            $data = $request->all(); 
            $request->validate([
                'employee_id' => 'required',      
                'departement_id' => 'required',      
                'in' => 'required',      
                'out' => 'required',      
                'date' => 'required',      
                'status' => 'required',      
            ]);
            
            if (count($data['employee_id']) > 0) {
                foreach ($data['employee_id'] as $item => $value) {
                    if ($data['status'][$item] == "Hadir" || $data['status'][$item] == "Terlambat") {
                        $data2 = array(
                            'employee_id' => $data['employee_id'][$item],
                            'departement_id' => $data['departement_id'][$item],
                            'in' => $data['in'][$item],
                            'out' => $data['out'][$item],
                            'status' => $data['status'][$item],
                        );
                    }else {
                        $data2 = array(
                            'employee_id' => $data['employee_id'][$item],
                            'departement_id' => $data['departement_id'][$item],
                            'status' => $data['status'][$item],
                            'in' => 0,
                            'out' => 0,
                        );
                    }
                    $data2['date'] = $request->date;
                    $data2['created_at'] = date('Y-m-d H:i:s');
                    $data2['updated_at'] = date('Y-m-d H:i:s');
                    Absensi::create($data2);
                }
            }
           
            \Session::flash('sukses','Data berhasil ditambah');
            return redirect('absensi');
        } catch (\Exception $e) {
            \Session::flash('gagal',$e->getMessage());
            return redirect()->back();
        }
        
    }

    public function edit($id)
    {
        $title = "Edit Absensi";
        
        $Absensi = Absensi::find($id);

        return view('absensi/edit', compact('title','absensi'));
        
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
            $absensi = Absensi::find($id);
            $absensi->nik = $request->nik;
            $absensi->name = $request->name;
            $absensi->address = $request->address;
            $absensi->departement_id = $request->departement_id;
            $absensi->position = $request->position;
            $absensi->date_of_birth = $request->date_of_birth;
            $absensi->gender = $request->gender;
            $absensi->entry_date = $request->entry_date;
            $absensi->status = $request->status;
            $absensi->save();

            \Session::flash('sukses','Data berhasil diedit');
            return redirect('absensi');
        } catch (\Exception $e) {
            \Session::flash('gagal',$e->getMessage());
            return redirect()->back();
        }
    }

    public function delete($id)
    {
        try {
            $Absensi = Absensi::find($id);
            $Absensi->delete();

            \Session::flash('sukses','Data berhasil dihapus');
            return redirect('absensi');
        } catch (\Exception $e) {
            \Session::flash('gagal',$e->getMessage());
            return redirect()->back();
        }
    }
}
