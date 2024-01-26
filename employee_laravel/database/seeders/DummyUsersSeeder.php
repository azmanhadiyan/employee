<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DummyUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userData =[
            [
                'name'=>'My Admin',
                'email'=>'myadmin@gmail.com',
                'role'=>'admin',
                'password'=>bcrypt('myadmin')
            ],
            [
                'name'=>'My Operator',
                'email'=>'myoperator@gmail.com',
                'role'=>'operator',
                'password'=>bcrypt('myoperator')
            ]
        ];
        foreach ($userData as $key => $value) {
            User::create($value);
        }
    }
}
