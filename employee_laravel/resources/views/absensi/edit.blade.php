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

            <form action="{{ url('employees/update',$employee->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="box-body">
                    <div class="row mb-3 form-group">
                        <label for="departement_id" class="col-sm-2 col-form-label">Departement</label>
                        <div class="col-sm-8">
                            <select name="departement_id" id="departement_id" class="form-control select2" required>
                                <option value="">-Pilih Departement-</option>
                                @foreach($departements as $item)
                                <option value="{{ $item->id}}" {{$item->id == $employee->departement_id ? 'selected' : ''}}>{{ $item->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3 form-group">
                        <label for="nik" class="col-sm-2 col-form-label">NIK</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value="{{ $employee->nik}}" required name="nik">
                        </div>
                        <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value="{{ $employee->name}}" required name="name">
                        </div>
                    </div>
                    <div class="row mb-3 form-group">
                        <label for="position" class="col-sm-2 col-form-label">Position</label>
                        <div class="col-sm-3">
                            <select name="position" id="position" class="form-control select2" required>
                                <option value="Manajer" {{ $employee->position == "Manajer" ? 'selected' : '' }}>Manajer</option>
                                <option value="Leader" {{ $employee->position == "Leader" ? 'selected' : '' }}>Leader</option>
                                <option value="Staff" {{ $employee->position == "Staff" ? 'selected' : '' }}>Staff</option>
                                <option value="Adm" {{ $employee->position == "Adm" ? 'selected' : '' }}>Adm</option>
                                <option value="User" {{ $employee->position == "User" ? 'selected' : '' }}>User</option>
                            </select>
                        </div>
                        <label for="address" class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value="{{ $employee->address}}" required name="address">
                        </div>
                    </div>
                    <div class="row mb-3 form-group">
                        <label for="gender" class="col-sm-2 col-form-label">Gender</label>
                        <div class="col-sm-3">
                            <select name="gender" id="gender" class="form-control select2" required>
                                <option value="Male" {{ $employee->gender == "Male" ? 'selected' : '' }}>Male</option>
                                <option value="Female" {{ $employee->gender == "Female" ? 'selected' : '' }}>Female</option>
                            </select>
                        </div>
                        <label for="date_of_birth" class="col-sm-2 col-form-label">Date of Birth</label>
                        <div class="col-sm-3">
                            <input type="date" class="form-control" value="{{ $employee->date_of_birth }}" required name="date_of_birth">
                        </div>
                    </div>
                    <div class="row mb-3 form-group">
                        <label for="status" class="col-sm-2 col-form-label">Status</label>
                        <div class="col-sm-3">
                            <select name="status" id="status" class="form-control select2" required>
                                <option value="Kontrak" {{ $employee->status == "Kontrak" ? 'selected' : '' }}>Kontrak</option>
                                <option value="Permanent" {{ $employee->status == "Permanent" ? 'selected' : '' }}>Permanent</option>
                            </select>
                        </div>
                        <label for="entry_date" class="col-sm-2 col-form-label">Entry Date</label>
                        <div class="col-sm-3">
                            <input type="date" class="form-control" value="{{ $employee->entry_date}}" required name="entry_date">
                        </div>
                    </div>
                </div>
                <div class="box-footer">
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>

@endsection
