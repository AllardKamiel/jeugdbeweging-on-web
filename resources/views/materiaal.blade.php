@extends("master")
@section("subtitle","Materiaal verhuur")

@section("tab_headers")
<ul style="margin-right: 10%;">
  <li><a href="#zoeken-anchor">Zoek</a></li>
  <li><a href="#huren-anchor">Huren</a></li>
  <li><a href="#brengtrg-anchor">Terugbrengen</a></li>
  <li><a href="#voegtoe-anchor">Toevoegen</a></li>
  <li><a href="#toonGehuurd-anchor">Toon gehuurd</a></li>
</ul>
@stop

@section("content")
<h2 style="margin-left: 100px;">Hier kan je een lijst van materialen bekijken om te huren, terug te brengen of te verhuren.</h2>
<div style="margin-left: 100px;margin-top: 12px;">
  <a id="zoeken-anchor"><h2>Lijst opvragen</h2></a>
  <div style="margin-top: 12px;">
    <input  style="margin-top: 4px;" type="text" name="Materiaalnaam" id="materiaalzoeker_materiaalnaam" placeholder="Materiaalnaam" />
    <input  style="margin-top: 4px;" type="text" name="Locatienaam" id="materiaalzoeker_locatienaam" placeholder="Locatienaam" />
    <input  style="margin-top: 4px;" type="number" name="Min aantal beschikbaar" id="materiaalzoeker_beschikbaar" placeholder="Min aantal beschikbaar" value="0"/>
  </div>
  <button style="margin-top: 4px;" type="button" onclick="zoekMateriaal()">zoek</button>
  <div style="margin-top: 12px;">
    <table id="materiaal_table" class="center">
      <thead>
          <tr>
              <th>Materiaal</th>
              <th>Locatie</th>
              <th>Prijs per dag</th>
              <th>Contactinfo</th>
              <th>Aantal beschikbaar</th>
              <th>Foto</th>
          </tr>
      </thead>
    </table>
  </div>
  <div style="margin-top: 24px;">
    <a id="huren-anchor" ><h2>Materiaal huren</h2></a>
    <div style="margin-top: 12px;">
      <input  style="margin-top: 4px;" type="text" name="Materiaalnaam" id="materiaalhuren_materiaalnaam" placeholder="Materiaalnaam" />
      <input  style="margin-top: 4px;" type="text" name="Locatienaam" id="materiaalhuren_locatienaam" placeholder="Locatienaam" />
      <input  style="margin-top: 4px;" type="number" name="Aantal huren" id="materiaalhuren_aantal" placeholder="Aantal huren" value="0"/>
    </div>
    <button style="margin-top: 4px;" type="button" onclick="huurMateriaal()">huren</button>
    <p id="materiaalhuren_status" style="margin-top: 4px;">Status</p>
  </div>
  <div style="margin-top: 24px;">
    <a id="brengtrg-anchor" ><h2>Materiaal terug brengen</h2></a>
    <div style="margin-top: 12px;">
      <input  style="margin-top: 4px;" type="text" name="Materiaalnaam" id="materiaalterugbrengen_materiaalnaam" placeholder="Materiaalnaam" />
      <input  style="margin-top: 4px;" type="text" name="Locatienaam" id="materiaalterugbrengen_locatienaam" placeholder="Locatienaam" />
      <input  style="margin-top: 4px;" type="number" name="Aantal terugbrengen" id="materiaalterugbrengen_aantal" placeholder="Aantal terugbrengen" value="0"/>
    </div>
    <button style="margin-top: 4px; width: 100px;" type="button" onclick="terugbrengenMateriaal()">terugbrengen</button>
    <p id="materiaalterugbrengen_status" style="margin-top: 4px;">Status</p>
  </div>
  <div style="margin-top: 24px;">
    <a id="voegtoe-anchor" ><h2>Materiaal toevoegen</h2></a>
    <div style="margin-top: 12px;">
      <input  style="margin-top: 4px;" type="text" name="Materiaalnaam" id="materiaaltoevoegen_materiaalnaam" placeholder="Materiaalnaam" />
      <input  style="margin-top: 4px;" type="text" name="Locatienaam" id="materiaaltoevoegen_locatienaam" placeholder="Locatienaam" />
      <input  style="margin-top: 4px;" type="number" name="Prijs per dag" id="materiaaltoevoegen_prijsperdag" placeholder="Prijs per dag"/>
      <input  style="margin-top: 4px;" type="text" name="Contactinfo" id="materiaaltoevoegen_Contactinfo" placeholder="Contactinfo" />
      <input  style="margin-top: 4px;" type="number" name="Beschikbaar aantal" id="materiaaltoevoegen_beschikbaar" placeholder="Beschikbaar aantal"/>
      <input  style="margin-top: 4px;" type="text" name="Fotolink" id="materiaaltoevoegen_fotolink" placeholder="Fotolink" />
    </div>
    <button style="margin-top: 4px; width: 100px;" type="button" onclick="toevoegenMateriaal()">toevoegen</button>
    <p id="materiaaltoevoegen_status" style="margin-top: 4px;">Status</p>
  </div>
  <div style="margin-top: 24px;">
  <a id="toonGehuurd-anchor"><h2>Toon de items die je gehuurd hebt</h2></a>
  <button style="margin-top: 4px;" type="button" onclick="toonGehuurdMateriaal()">show</button>
  <div style="margin-top: 12px;">
    <table id="materiaalGehuurd_table" class="center">
      <thead>
          <tr>
              <th>Materiaal</th>
              <th>Locatie</th>
              <th>Aantal gehuurd</th>
          </tr>
      </thead>
    </table>
  </div>
</div>
  <div style="margin-left: 50px;margin-top: 120%;">
    <p>The end of the page</p>
  </div>
@stop