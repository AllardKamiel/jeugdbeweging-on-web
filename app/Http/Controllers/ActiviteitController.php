<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ActiviteitController extends Controller
{
        //
    
         /**
         * Show the Activiteiten 
         * 

         * @return \Illuminate\Http\Response
         */
        public function showActiviteit()
        {
            //print("dit is de test voor Activiteit");
            return view('activiteiten');
        }
        public function showActiviteitDetail()
        {
            //print("dit is de test voor Activiteit");
            return view('activiteitenDetail');
        }
}
