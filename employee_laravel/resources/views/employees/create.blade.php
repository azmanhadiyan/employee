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
            {{-- notifikasi form validasi --}}
            @if ($errors->has('file'))
            <span class="invalid-feedback" role="alert">
                <strong>{{ $errors->first('file') }}</strong>
            </span>
            @endif

            {{-- notifikasi sukses --}}
            @if ($sukses = Session::get('sukses'))
            <div class="alert alert-success alert-block">
                <button type="button" class="close" data-dismiss="alert">×</button>
                <strong>{{ $sukses }}</strong>
            </div>
            @endif

            <form action="{{ url('employees/store') }}" method="POST">
                @csrf
                <div class="box-body">
                    <div class="row mb-3 form-group">
                        <label for="departement_id" class="col-sm-2 col-form-label">Departement</label>
                        <div class="col-sm-8">
                            <select name="departement_id" id="departement_id" class="form-control select2" required>
                                <option value="">-Pilih Departement-</option>
                                @foreach($departements as $item)
                                <option value="{{ $item->id}}">{{ $item->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3 form-group">
                        <label for="nik" class="col-sm-2 col-form-label">NIK</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value="{{ old('nik')}}" required name="nik">
                        </div>
                        <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value="{{ old('name')}}" required name="name">
                        </div>
                    </div>
                    <div class="row mb-3 form-group">
                        <label for="position" class="col-sm-2 col-form-label">Position</label>
                        <div class="col-sm-3">
                            <select name="position" id="position" class="form-control select2" required>
                                <option value="">-Pilih Position-</option>
                                <option value="Manajer" @if (old('position') == "Manajer") {{ 'selected' }} @endif>Manajer</option>
                                <option value="Leader" @if (old('position') == "Leader") {{ 'selected' }} @endif>Leader</option>
                                <option value="Staff" @if (old('position') == "Staff") {{ 'selected' }} @endif>Staff</option>
                                <option value="Adm" @if (old('position') == "Adm") {{ 'selected' }} @endif>Adm</option>
                                <option value="User" @if (old('position') == "User") {{ 'selected' }} @endif>User</option>
                            </select>
                        </div>
                        <label for="address" class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-3">
                            <input type="text" class="form-control" value="{{ old('address')}}" required name="address">
                        </div>
                    </div>
                    <div class="row mb-3 form-group">
                        <label for="gender" class="col-sm-2 col-form-label">Gender</label>
                        <div class="col-sm-3">
                            <select name="gender" id="gender" class="form-control select2" required>
                                <option value="">-Pilih Gender-</option>
                                <option value="Male" @if (old('gender') == "Male") {{ 'selected' }} @endif>Male</option>
                                <option value="Female" @if (old('gender') == "Female") {{ 'selected' }} @endif>Female</option>
                            </select>
                        </div>
                        <label for="date_of_birth" class="col-sm-2 col-form-label">Date of Birth</label>
                        <div class="col-sm-3">
                            <input type="date" class="form-control" value="{{ old('date_of_birth')}}" required name="date_of_birth">
                        </div>
                    </div>
                    <div class="row mb-3 form-group">
                        <label for="status" class="col-sm-2 col-form-label">Status</label>
                        <div class="col-sm-3">
                            <select name="status" id="status" class="form-control select2" required>
                                <option value="">-Pilih Status-</option>
                                <option value="Kontrak" @if (old('status') == "Kontrak") {{ 'selected' }} @endif>Kontrak</option>
                                <option value="Permanent" @if (old('status') == "Permanent") {{ 'selected' }} @endif>Permanent</option>
                            </select>
                        </div>
                        <label for="entry_date" class="col-sm-2 col-form-label">Entry Date</label>
                        <div class="col-sm-3">
                            <input type="date" class="form-control" value="{{ old('entry_date')}}" required name="entry_date">
                        </div>
                    </div>
                </div>
                
                <!-- /.box-body -->

                <div class="box-footer">
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>

@endsection
