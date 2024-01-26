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
                    <a href="{{ url('absensi/create') }}" class="btn btn-sm btn-flat btn-primary pull-right"><i class="fa fa-plus"></i> Add </a>
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
                                <th>NIK</th>
                                <th>Name</th>
                                <th>Departement</th>
                                <th>Position</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>In</th>
                                <th>Out</th>
                                <th>Absensi</th>
                            </tr>
                        </thead>
                        @php $i=1 @endphp
                        @foreach ($absensi as $item)
                        <tr>
                            <td>{{ $i++ }}</td>
                            <td>
                                <form action="{{ url('absensi/delete',$item->id) }}" method="POST">
                                    <!-- <a class="btn btn-sm btn-flat btn-info"
                                    href="{{ url('absensi/show',$item->id) }}">
                                    <i class="fa fa-eye"></i></a> -->
                                    <a class="btn btn-sm btn-flat btn btn-warning"
                                        href="{{ url('absensi/edit',$item->id) }}">
                                        <i class="fa fa-edit"></i></a>
                                    @csrf
                                    @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-flat btn btn-danger" onclick="return confirm('Are you sure?')"><i
                                        class="fa fa-trash"></i></button>
                                </form>
                            </td>
                            <td>{{ $item->employees->nik }}</td>
                            <td>{{ $item->employees->name }}</td>
                            <td>{{ $item->departements->name }}</td>
                            <td>{{ $item->employees->position }}</td>
                            <td>{{ $item->employees->gender }}</td>
                            <td>{{ $item->employees->status }}</td>
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
