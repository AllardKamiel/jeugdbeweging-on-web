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
$msg = $client->getLijstMateriaal(array('naam'=>"Test",'locatie'=>"Test",'prijsperdag'=>-2,'contactinfo'=>"TestC",'beschikbaar'=>-1,'fotolink'=>"TestF",));

$lala = $msg->getLijstMateriaalResult;
$return= $lala;

$result = ["uitkomst" => $return];


print(json_encode($result));

?>
