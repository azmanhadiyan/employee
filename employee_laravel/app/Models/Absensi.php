<?php

namespace App\Models;

use App\Models\Admin\Departement;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absensi extends Model
{
    use HasFactory;
    protected $table = 'absensi';
    
    protected $fillable = [
        'employee_id','departement_id',
        'in','out',
        'date','status'
    ];
    
    public function departements()
    {
        return $this->belongsTo(Departement::class, 'departement_id');
    }
    public function employees()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }
}
