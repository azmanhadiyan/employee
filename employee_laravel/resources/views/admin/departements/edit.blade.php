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

            <form action="{{ url('admin/departements/update',$departement->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="box-body">
                    <div class="row mb-3 form-group">
                        <label for="name" class="col-sm-2 col-form-label">Name </label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" value="{{ $departement->name}}" name="name">
                        </div>
                    </div>
                    <div class="row mb-3 form-group">
                        <label for="kode_departement" class="col-sm-2 col-form-label">Kode Departement </label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" value="{{ $departement->kode_departement}}" name="kode_departement">
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
