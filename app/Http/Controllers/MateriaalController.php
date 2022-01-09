<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
//use App\Models\<Modelnaam>;
//Voor SOAP
use Artisaninweb\SoapWrapper\SoapWrapper;
use App\SOAP\GetLyricRequest;

class MateriaalController extends Controller
{
    //

    /**
    * Show the Materiaal page 
    * @return \Illuminate\Http\Response
    */
    public function show()
    {
        $user = Auth::user();
        $userName = $user->name;
        return view("materiaal")->with("usernaam", $userName);
    }
    public function showMateriaal($materiaalnaam)
    {
        return view("materiaal")->with("materiaalnaam", $materiaalnaam);
    }
}
