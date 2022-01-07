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
        public function showActiviteit()
        {
            return view('activiteitenCalender');
        }
        public function showActiviteitDetail()
        {
            //print("dit is de test voor Activiteit");
            return view('activiteitenCalenderDetail');
        }
        public function showActiviteitVoegToe()
        {
            //print("dit is de test voor Activiteit");
            return view('activiteitenCalenderVoegToe');
        }
}
