<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    //

     /**
     * Show the Homepage 
     * @return \Illuminate\Http\Response
     */
    public function showHome()
    {
        return view('home');
    }

}


