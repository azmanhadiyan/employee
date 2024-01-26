<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbsensiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('absensi', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('employee_id')->unsigned();
            $table->bigInteger('departement_id')->unsigned();
            $table->string('in');
            $table->string('out');
            $table->string('status');
            $table->date('date');
            
            $table->timestamps();
            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('restrict');
            $table->foreign('departement_id')->references('id')->on('departements')->onDelete('restrict');
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('absensi');
    }
}
