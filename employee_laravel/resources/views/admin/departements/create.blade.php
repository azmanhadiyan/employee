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

            <form action="{{ url('admin/departements/store') }}" method="POST">
                @csrf
                <div class="box-body">
                    <div class="row mb-3 form-group">
                        <label for="name" class="col-sm-5 col-form-label">Departement</label>
                        <label for="kode_departement" class="col-sm-5 col-form-label">Kode Departement</label>
                    </div>
                    <div class="row mb-3 form-group">
                        <div class="col-sm-5">
                            <input type="text" class="form-control" value="{{ old('name')}}" required name="name[]">
                        </div>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" value="{{ old('kode_departement')}}" required name="kode_departement[]">
                        </div>
                        <div class="col-sm-2">
                            <a href="#" class="add_data btn btn-primary pull-right">Add Data</a>
                        </div>
                    </div>
                    <div class="data_add"></div>
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

@section('scripts')

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script type="text/javascript">
    
    // btn refresh
    $('.btn-refresh').click(function (e) {
        e.preventDefault();
        $('.preloader').fadeIn();
        location.reload();
    });

    //addtable
    $('.add_data').on('click', function() {
        add_data();
    });

    function add_data() {
        var data_add = '<div>'+
                                '<div class="row mb-3 form-group">'+
                                    '<div class="col-sm-5">'+
                                        '<input type="text" class="form-control" name="name[]" required>'+
                                    '</div>'+
                                    '<div class="col-sm-5">'+
                                        '<input type="text" class="form-control" name="kode_departement[]" required>'+
                                    '</div>'+
                                    '<div class="col-sm-2">'+
                                        '<a href="#" class="remove btn btn-danger pull-right">Hapus</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
        $('.data_add').append(data_add);
    };

    $('.remove').live('click',function(){
        $(this).parent().parent().parent().remove();
    });

</script>

@endsection
