<?php

namespace App\Models;

use App\Models\Admin\Departement;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $table = 'employees';
    protected $fillable = [
        'name','nik',
        'address','departement_id',
        'position','date_of_birth',
        'gender','entry_date',
        'status'
    ];

    public function departements()
    {
        return $this->belongsTo(Departement::class, 'departement_id');
    }
}
