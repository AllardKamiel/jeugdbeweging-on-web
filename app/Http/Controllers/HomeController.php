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
        print("dit is de test voor Home");
        // return view('Home.show');
    }

}


