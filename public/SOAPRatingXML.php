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


$url = "http://ratingapi.kindeyeindustries.com/SOAPRating.asmx";
$client = new SoapClient($url);

try
{
  if($query == "voegRatingToe"){
      $msg = $client->voegRatingToe(array('score'=>$score,'userId'=>"$userId",'itemSource'=>"$itemSource",'itemId'=>"$itemId"));
      $jsonResult = $msg->voegRatingToeResult;
  }
  if($query == "getRating"){
    $msg = $client->getRating(array('itemSource'=>"$itemSource",'itemId'=>"$itemId"));
    $jsonResult = $msg->getRatingResult;
  }
  if($query == "deleteRating"){
    $msg = $client->deleteRating(array('userId'=>"$userId",'itemSource'=>"$itemSource",'itemId'=>"$itemId"));
    $jsonResult = $msg->deleteRatingResult;
  }
}catch(SoapFault $client){
  $jsonResult = $client->__toString();
}
$return= $jsonResult;

$result = ["uitkomst" => $return];
print(json_encode($result));

?>