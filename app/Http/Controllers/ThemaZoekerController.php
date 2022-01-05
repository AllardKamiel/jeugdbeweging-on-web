<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ThemaZoekerController extends Controller
{
        //
    
         /**
         * Show the themazoeker page 
         * 

         * @return \Illuminate\Http\Response
         */
        public function show()
        {
            return view("themazoeker");
        }
}
