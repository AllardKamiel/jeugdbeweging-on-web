<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$data = json_decode(file_get_contents('php://input'), true);

$naam = $data['naam'];
$locatie = $data['locatie'];
$usernaam = $data['usernaam'];
$aantal = $data['aantal'];
$prijsperdag = $data['prijsperdag'];
$contactinfo = $data['contactinfo'];
$beschikbaar = $data['beschikbaar'];
$fotolink = $data['fotolink'];
$query = $data['query'];

$return = "";

$port = "8054";

$url = "http://localhost:$port/SOAPMateriaal.asmx";
$client = new SoapClient($url);
if($query == "getLijstMateriaal"){
  $msg = $client->getLijstMateriaal(array('naam'=>"$naam",'locatie'=>"$locatie",'beschikbaar'=>$beschikbaar));
  $jsonResult = $msg->getLijstMateriaalResult;
}
if($query == "huurMateriaal"){
  $msg = $client->huurMateriaal(array('userNaam'=>"$usernaam",'naam'=>"$naam",'locatie'=>"$locatie",'aantal'=>$aantal));
  $jsonResult = $msg->huurMateriaalResult;
}
if($query == "brengMateriaalTerug"){
  $msg = $client->brengMateriaalTerug(array('userNaam'=>"$usernaam",'naam'=>"$naam",'locatie'=>"$locatie",'aantal'=>$aantal));
  $jsonResult = $msg->brengMateriaalTerugResult;
}

if($query == "voegMateriaalToe"){
  $msg = $client->voegMateriaalToe(array('naam'=>"$naam",'locatie'=>"$locatie",'prijsperdag'=>"$prijsperdag",'contactinfo'=>"$contactinfo",'beschikbaar'=>$beschikbaar,'fotolink'=>$fotolink));
  $jsonResult = $msg->voegMateriaalToeResult;
}

if($query == "toonGehuurdMateriaal"){
  $msg = $client->toonGehuurdMateriaal(array('userNaam'=>"$usernaam"));
  $jsonResult = $msg->toonGehuurdMateriaalResult;
}


$return= $jsonResult;


$result = ["uitkomst" => $return];
print(json_encode($result));

?>
