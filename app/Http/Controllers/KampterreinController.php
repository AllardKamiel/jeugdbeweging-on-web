<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KampterreinController extends Controller
{   
    
    //

    /**
    * Show the Kampterrein page 
    * @return \Illuminate\Http\Response
    */
    public function showKampterrein()
    {
       return view('kampterreinen');
    }
}
