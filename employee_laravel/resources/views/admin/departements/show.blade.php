@extends('layouts.master')

@section('content')
<div class="row">
    <div class="col-md-12">
        <h2>{{ $title }}</h2>
        <div class="box box-warning">
            <div class="box-header">
                <p>
                    <button class="btn btn-sm btn-flat btn-warning btn-refresh"><i class="fa fa-refresh"></i>
                        Refresh</button>
                    <a class="btn btn-primary pull-right" href="{{ url('admin/departements') }}"> Back</a>
                </p>
            </div>

            @if ($errors->any())
            <div class="alert alert-danger">
                <strong>Whoops!</strong> There were some problems with your input.<br><br>
                <ul>
                    @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif
            <div class="box-body">
                <div class="row mb-3 form-group">
                    <label for="name" class="col-sm-2 col-form-label">Name </label>
                    <div class="col-sm-10">{{ $departement->name}} </div>
                </div>
                <div class="row mb-3 form-group">
                    <label for="kode_departement" class="col-sm-2 col-form-label">Kode Departement </label>
                    <div class="col-sm-10">{{ $departement->kode_departement}} </div>
                </div>
            </div>
            
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-hover myTable">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>NIK</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Entry Date</th>
                                <th>Status</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        @php $i=1 @endphp
                        @foreach ($employees as $item)
                        <tr>
                            <td>{{ $i++ }}</td>
                            <td>{{ $item->nik }}</td>
                            <td>{{ $item->name }}</td>
                            <td>{{ $item->position }}</td>
                            <td>{{ $item->gender }}</td>
                            <td>{{ date('d M Y',strtotime($item->date_of_birth))}}</td>
                            <td>{{ date('d M Y',strtotime($item->entry_date))}}</td>
                            <td>{{ $item->status }}</td>
                            <td>{{ $item->address }}</td>
                        </tr>
                        @endforeach
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
