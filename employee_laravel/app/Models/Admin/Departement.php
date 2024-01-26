<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Departement extends Model
{
    protected $table = 'departements';
    use HasFactory;
    protected $fillable = [
        'name','kode_departement'
    ];
}
