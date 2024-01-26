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
                    <a class="btn btn-primary pull-right" href="{{ url('absensi') }}"> Back</a>
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

            <form action="{{ url('absensi/store') }}" method="POST">
                @csrf
                
                <div class="box-body">
                    <div class="row mb-3 form-group">
                        <label for="date" class="col-sm-2 col-form-label">Date</label>
                        <div class="col-sm-5">
                            <input type="date" class="form-control" value="{{ old('date')}}" required name="date">
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover ">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>NIK</th>
                                    <th>Name</th>
                                    <th>Departement</th>
                                    <th>Position</th>
                                    <th>Gender</th>
                                    <th>Status</th>
                                    <th>In</th>
                                    <th>Out</th>
                                    <th>Absensi</th>
                                </tr>
                            </thead>
                            @php $i=1 @endphp
                            @foreach ($employees as $item)
                            <tr>
                                <td>{{ $i++ }}</td>
                                <td>{{ $item->nik }}</td>
                                <td>{{ $item->name }}</td>
                                <td>{{ $item->departements->name }}</td>
                                <td>{{ $item->position }}</td>
                                <td>{{ $item->gender }}</td>
                                <td>{{ $item->status }}</td>
                                <td>
                                    <input type="time" class="form-control" name="in[]">
                                    <input type="hidden" name="employee_id[]" value="{{ $item->id}}">
                                    <input type="hidden" name="departement_id[]" value="{{ $item->departement_id}}">
                                </td>
                                <td>
                                    <input type="time" class="form-control" name="out[]">
                                </td>
                                <td>
                                    <select name="status[]" id="status" style="width:100%;" class="form-control select2" required>
                                        <option value="">-Pilih Hadir-</option>
                                        <option value="Hadir" @if (old('status') == "Hadir") {{ 'selected' }} @endif>Hadir</option>
                                        <option value="Terlambat" @if (old('status') == "Terlambat") {{ 'selected' }} @endif>Terlambat</option>
                                        <option value="Cuti" @if (old('status') == "Cuti") {{ 'selected' }} @endif>Cuti</option>
                                        <option value="Alfa" @if (old('status') == "Alfa") {{ 'selected' }} @endif>Alfa</option>
                                    </select>
                                </td>
                            </tr>
                            @endforeach
                        </table>
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
