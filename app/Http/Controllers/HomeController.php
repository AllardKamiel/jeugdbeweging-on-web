<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    //

     /**
     * Show the BMI 
     * 
     * @param double $weight
     * @param double $length
     * 
     * @return \Illuminate\Http\Response
     */
    public function showHome()
    {
        print("dit is de test voor Home");
    }

}


