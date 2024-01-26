<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('nik');
            $table->string('name');
            $table->string('address');
            $table->bigInteger('departement_id')->unsigned();
            $table->string('position');
            $table->date('date_of_birth');
            $table->string('gender');
            $table->date('entry_date');
            $table->string('status');
            
            $table->timestamps();
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
        Schema::dropIfExists('employees');
    }
}
