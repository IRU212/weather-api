<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class YoutubeController extends Controller
{
    public function index(){
        $posts = ['apple'=>'red'];
        return response()->json($posts);
    }
}
