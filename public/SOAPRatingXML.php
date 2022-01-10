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

$score = $data['score'];
$userId = $data['userId'];
$itemSource = $data['itemSource'];
$itemId = $data['itemId'];
$query = $data['query'];

$return = "";


// $port = "8054";
// $url = "http://localhost:$port/SOAPMateriaal.asmx";


$url = "http://localhost:8060/SOAPRating.asmx";

$client = new SoapClient($url);


$params = array(
    "score" => $contact,
    "userId" => "test",
    "itemSource" => "test",
    "itemId" => "test",
  );

if($query == "voegRatingToe"){
    // $msg = $client->__getFunctions();
    $msg = $client->voegRatingToe(array('score'=>"$score",'userId'=>"$userId",'itemSource'=>"$itemSource",'itemId'=>"$itemId"));
    // $msg = $client->voegRatingToe(array('score'=>"$score",'userId'=>"$userId",'itemSource'=>"$itemSource", 'itemId'=>"$itemId"));
    // $jsonResult = $msg->voegRatingToeResult;
  }

$return= $msg;


$result = ["uitkomst" => $return];
print(json_encode($result));

?>