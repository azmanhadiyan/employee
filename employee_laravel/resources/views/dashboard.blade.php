@extends('layouts.master')

@section('content')

<div class="row">
    <div class="col-md-12">
        <div class="box box-warning">
            <div class="box-header">
                <p>
                    <button class="btn btn-sm btn-flat btn-warning btn-refresh"><i class="fa fa-refresh"></i> Refresh</button>
                </p>
            </div>
            {{-- notifikasi form validasi --}}
            @if ($errors->has('file'))
            <span class="invalid-feedback" role="alert">
                <strong>{{ $errors->first('file') }}</strong>
            </span>
            @endif

            <div class="box-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-3">
                            <div class="small-box bg-primary">
                                <div style="text-align:center; font-size:150%">
                                    <b>TOTAL KARYAWAN</b>
                                    <hr style="margin-top:-2%;">
                                </div>
                                <div class="inner" style="margin-top:-10%;">
                                    <h3 style="text-align:center;">{{ $total_karyawan }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="small-box bg-primary">
                                <div style="text-align:center; font-size:150%">
                                    <b>TOTAL LEADER</b>
                                    <hr style="margin-top:-2%;">
                                </div>
                                <div class="inner" style="margin-top:-10%;">
                                    <h3 style="text-align:center;">{{ $total_leader }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="small-box bg-green">
                                <div style="text-align:center; font-size:150%">
                                    <b>TOTAL HADIR</b>
                                    <hr style="margin-top:-2%;">
                                </div>
                                <div class="inner" style="margin-top:-10%;">
                                    <h3 style="text-align:center;">{{ $total_hadir }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="col-md-3">
                            <div class="small-box bg-yellow">
                                <div style="text-align:center; font-size:150%">
                                    <b>TOTAL TERLAMBAT</b>
                                    <hr style="margin-top:-2%;">
                                </div>
                                <div class="inner" style="margin-top:-10%;">
                                    <h3 style="text-align:center;">{{ $total_terlambat }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="small-box bg-primary">
                                <div style="text-align:center; font-size:150%">
                                    <b>TOTAL CUTI</b>
                                    <hr style="margin-top:-2%;">
                                </div>
                                <div class="inner" style="margin-top:-10%;">
                                    <h3 style="text-align:center;">{{ $total_cuti }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="small-box bg-red">
                                <div style="text-align:center; font-size:150%">
                                    <b>TOTAL ALFA</b>
                                    <hr style="margin-top:-2%;">
                                </div>
                                <div class="inner" style="margin-top:-10%;">
                                    <h3 style="text-align:center;">{{ $total_alfa }}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

