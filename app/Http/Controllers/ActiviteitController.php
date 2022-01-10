<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
            $user = Auth::user();
            $userName = $user->name;
            return view('activiteiten')->with("usernaam", $userName);
        }
        public function showActiviteitDetail()
        {
            //print("dit is de test voor Activiteit");
            $user = Auth::user();
            $userName = $user->name;
            return view('activiteitenDetail')->with("usernaam", $userName);
        }
        public function showActiviteitVoegToe()
        {
            //print("dit is de test voor Activiteit");
            return view('activiteitenVoegToe');
        }
}
