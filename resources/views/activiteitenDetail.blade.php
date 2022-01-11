@extends("master")
@section("subtitle","Home")


@section("content")
<body onload="fillActiviteitDetail()">
<div style="margin-left: 50px;">
  <h1>Activiteit detail &#128512;</h1>
  <div style="margin-top: 30px;">
  <p hidden id="activiteit_detail_usernaam">{{$usernaam}}</p>
  
  <p hidden id="activiteitId",type="text"></p>  
  <div style="margin-top: 12px;" id="activiteit_rating">Hier komt de gemiddelde rating van de activiteit</div>  
  <p id="titel",type="text"></p>
  <p id="duration",type="text"></p>
  <p id="age_min",type="text"></p>
  <p id="age_max",type="text"></p>
  <p id="pers_min",type="text"></p>
  <p id="pers_max",type="text"></p>
  <p id="setting_tag",type="text"></p>
  <p id="thema_tag1",type="text"></p>
  <p id="thema_tag2",type="text"></p>
  <p id="thema_tag3",type="text"></p>
  <p id="links",type="text"></p>
  <p id="extra_assets",type="text"></p>

  <p id="matriaallijst"></p>
  <p id="beschrijving"></p>
  <br></br>
  <h2>Rate een activiteit</h2></a>
  <select  style="margin-top: 4px;" name="rating_select_activiteit" id="rating_select_activiteit">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select><br>
      <button style="margin-top: 4px; width: 100px;" type="button" onclick="rateActiviteit()">rate</button>
  </div>
</div>


@stop