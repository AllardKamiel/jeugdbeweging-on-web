<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LokaalController extends Controller
{
    //

     /**
     * Show the LokaalPage
     * @return \Illuminate\Http\Response
     */
    public function showLokaal()
    {
        print("dit is de test voor Lokaal");
        // return view('Lokaal.show');
    }
}
