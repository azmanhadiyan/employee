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
                    <a class="btn btn-primary pull-right" href="{{ url('employees') }}"> Back</a>
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
                    <label for="departement_id" class="col-sm-2 col-form-label">Departement</label>
                    <div class="col-sm-8">{{$employee->departements->name}}</div>
                </div>
                <div class="row mb-3 form-group">
                    <label for="nik" class="col-sm-2 col-form-label">NIK</label>
                    <div class="col-sm-3">{{ $employee->nik}}</div>
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-3">{{ $employee->name}}</div>
                </div>
                <div class="row mb-3 form-group">
                    <label for="position" class="col-sm-2 col-form-label">Position</label>
                    <div class="col-sm-3">{{ $employee->position}}</div>
                    <label for="address" class="col-sm-2 col-form-label">Address</label>
                    <div class="col-sm-3">{{ $employee->address}}</div>
                </div>
                <div class="row mb-3 form-group">
                    <label for="gender" class="col-sm-2 col-form-label">Gender</label>
                    <div class="col-sm-3">{{ $employee->gender }}</div>
                    <label for="date_of_birth" class="col-sm-2 col-form-label">Date of Birth</label>
                    <div class="col-sm-3">{{ $employee->date_of_birth }}</div>
                </div>
                <div class="row mb-3 form-group">
                    <label for="status" class="col-sm-2 col-form-label">Status</label>
                    <div class="col-sm-3">{{ $employee->status}}</div>
                    <label for="entry_date" class="col-sm-2 col-form-label">Entry Date</label>
                    <div class="col-sm-3">{{ $employee->entry_date}}</div>
                </div>
            </div>
            
            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-hover myTable">
                        <thead>
                            <tr>
                                <th>No</th> 
                                <th>Date</th>
                                <th>In</th>
                                <th>Out</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        @php $i=1 @endphp
                        @foreach ($absensi as $item)
                        <tr>
                            <td>{{ $i++ }}</td>
                            <td>{{ date('d M Y',strtotime($item->date))}}</td>
                            <td>{{ $item->in }}</td>
                            <td>{{ $item->out }}</td>
                            @if($item->status == "Hadir")
                            <td style="font-weight:bold; background-color: rgb(14, 240, 14)">{{ $item->status }}</td>
                            @elseif($item->status == "Terlambat")
                            <td style="font-weight:bold; background-color: rgb(255, 255, 0)">{{ $item->status }}</td>
                            @elseif($item->status == "Cuti")
                            <td style="font-weight:bold; background-color: rgb(150, 150, 223)">{{ $item->status }}</td>
                            @elseif($item->status == "Alfa")
                            <td style="font-weight:bold; background-color: red">{{ $item->status }}</td>
                            @endif
                        </tr>
                        @endforeach
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
