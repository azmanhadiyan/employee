<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Departement;
use App\Models\Employee;
use Illuminate\Http\Request;

class DepartementController extends Controller
{
    public function index()
    {
        $title = "Departement";
        $departements = Departement::all();
        
        return view('admin/departements/index', compact('title','departements'));

    }

    public function create()
    {
        $title = "Create Departement";

        return view('admin/departements/create', compact('title'));
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required',    
                'kode_departement' => 'required'      
            ]);
            $data = $request->all();
        
            if (count($data['name']) > 0) {
                foreach ($data['name'] as $item => $value) {
                    $data2 = array(
                        'name' => $data['name'][$item],
                        'kode_departement' => $data['kode_departement'][$item],
                    );
                    $data2['created_at'] = date('Y-m-d H:i:s');
                    $data2['updated_at'] = date('Y-m-d H:i:s');
                    Departement::create($data2);
                }
            }
            \Session::flash('sukses','Data berhasil ditambah');
            return redirect('admin/departements');
        } catch (\Exception $e) {
            \Session::flash('gagal',$e->getMessage());
            return redirect()->back();
        }
        
    }

    public function edit($id)
    {
        $title = "Edit Departement";
        
        $departement = Departement::find($id);

        return view('admin/departements/edit', compact('title','departement'));
        
    }
    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'name' => 'required',    
                'kode_departement' => 'required'      
            ]);
            $departements = Departement::find($id);
            $departements->name = $request->name;
            $departements->kode_departement = $request->kode_departement;
            
            $departements->save();

            \Session::flash('sukses','Data berhasil diedit');
            return redirect('admin/departements');
        } catch (\Exception $e) {
            \Session::flash('gagal',$e->getMessage());
            return redirect()->back();
        }
    }

    public function show($id)
    {
        $title = "Show Departement";
        
        $departement = Departement::find($id);
        $employees = Employee::where('departement_id',$id)->get();

        return view('admin/departements/show', compact('title','departement','employees'));
    }

    public function delete($id)
    {
        try {
            $departement = Departement::find($id);
            $departement->delete();

            \Session::flash('sukses','Data berhasil dihapus');
            return redirect('admin/departements');
        } catch (\Exception $e) {
            \Session::flash('gagal',$e->getMessage());
            return redirect()->back();
        }
    }
}
