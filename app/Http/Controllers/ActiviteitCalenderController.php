<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ActiviteitCalenderController extends Controller
{
        //
    
         /**
         * Show the Activiteiten calender
         * 

         * @return \Illuminate\Http\Response
         */
        public function showActiviteitCalender()
        {
            return view('activiteitenCalender');
        }
        public function showActiviteitCalenderVoegToe()
        {
            //print("dit is de test voor Activiteit");
            return view('activiteitenCalenderVoegToe');
        }
}
