@extends("master")
@section("subtitle","Thema zoeker")

@section("tab_headers")
<ul style="margin-right: 10%;">
  <li><a href="">Zoek</a></li>
  <li><a href="#voegtoe-anchor">Toevoegen</a></li>
</ul>
@stop

@section("content")
<div style="margin-left: 100px;">
  <h1>Hier kan je een leuk thema zoeken, of er zelf een toevoegen &#128512;</h1>
  <div style="margin-top: 30px;">
    <p>Vul hieronder het aantal themas waardoor je je wil laten inspireren</p>
    <input  style="margin-top: 4px;" type="number" name="aantal" id="themazoeker_aantal" value="2" />
    <button style="margin-top: 4px;" type="button" onclick="zoekThema()">zoek</button>
    <p id="themazoeker_result" style="color: red;margin-top: 4px;">Hier komen de themas tevoorschijn!</p>
    <button style="margin-top: 4px;width: 200px;visibility: hidden;" type="button" id="themazoeker_acti_btn" onclick="zoekActiviteitThema()">zoek activiteit met thema 1</button>
  </div>
</div>
<div style="margin-left: 100px;margin-top: 50px;">
  <a id="voegtoe-anchor" ><h2>Toevoegen</h2></a>
  <div style="margin-top: 30px;">
    <p>Vul het veld hieronder in om een thema toe te voegen</p>
    <input  style="margin-top: 4px;" type="text" name="nieuw_thema" id="themazoeker_text" placeholder="Vul hier je eigen thema in" />
    <button style="margin-top: 4px;" type="button" onclick="opslaanThema()">opslaan</button>
    <p id="themazoeker_status" style="margin-top: 4px;">Status</p>
  </div>
</div>
<div style="margin-left: 50px;margin-top: 120%;">
  <p>The end of the page</p>
</div>
@stop