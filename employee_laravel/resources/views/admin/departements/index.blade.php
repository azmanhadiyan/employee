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
                    <a href="{{ url('admin/departements/create') }}" class="btn btn-sm btn-flat btn-primary pull-right"><i class="fa fa-plus"></i> Add </a>
                </p>
            </div>
            {{-- notifikasi form validasi --}}
            @if ($errors->has('file'))
            <span class="invalid-feedback" role="alert">
                <strong>{{ $errors->first('file') }}</strong>
            </span>
            @endif

            <div class="box-body">
                <div class="table-responsive">
                    <table class="table table-hover myTable">
                        <thead>
                            <tr>
                                <th>No</th> 
                                <th>Action</th>
                                <th>Name</th>
                                <th>Kode Departement</th>
                            </tr>
                        </thead>
                        @php $i=1 @endphp
                        @foreach ($departements as $item)
                        <tr>
                            <td>{{ $i++ }}</td>
                            <td>
                                <form action="{{ url('admin/departements/delete',$item->id) }}" method="POST">
                                    <a class="btn btn-sm btn-flat btn-info"
                                    href="{{ url('admin/departements/show',$item->id) }}">
                                    <i class="fa fa-eye"></i></a>
                                    <a class="btn btn-sm btn-flat btn btn-warning"
                                        href="{{ url('admin/departements/edit',$item->id) }}">
                                        <i class="fa fa-edit"></i></a>
                                    @csrf
                                    @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-flat btn btn-danger" onclick="return confirm('Are you sure?')"><i
                                        class="fa fa-trash"></i></button>
                                </form>
                            </td>
                            <td>{{ $item->name }}</td>
                            <td>{{ $item->kode_departement }}</td>
                        </tr>
                        @endforeach
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

@section('scripts')

<script type="text/javascript">
    $(document).ready(function () {

        // btn refresh
        $('.btn-refresh').click(function (e) {
            e.preventDefault();
            $('.preloader').fadeIn();
            location.reload();
        })

    })

</script>
@endsection
