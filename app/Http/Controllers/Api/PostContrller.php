<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Test;
use Illuminate\Http\Request;

class PostContrller extends Controller
{
    public function index(){
        $datas = Test::all();
        return response()->json($datas,200);
    }
}
