@extends("master")
@section("subtitle","Kampterreinen")

@section("tab_headers")
<ul style="margin-right: 10%;">
  <li><a href="#zoeken-anchor">Zoeken</a></li>
  <li><a href="#wijzigen-anchor">Wijzigen</a></li>
</ul>
@stop

@section("content")
<h2 style="margin-left: 100px;">Hier kan je een lijst van kampterreinen opvragen.</h2>
<div style="margin-left: 100px;margin-top: 12px;">
  <a id="zoeken-anchor"><h2>Zoeken</h2></a>
  <div style="margin-top: 12px;">
    <select  style="margin-top: 4px;" name="type_tag" id="kampterreinzoeker_type">
      <option value="wei">Wei</option>
      <option value="gebouw">Gebouw</option>
      <option value="beide">Wei en gebouw</option>
    </select>
    <input  style="margin-top: 4px;" type="text" name="Locatie" id="kampterreinzoeker_locatie" placeholder="Locatie" />
    <input  style="margin-top: 4px;" type="number" name="Max prijsperdag" id="kampterreinzoeker_maxprijs" placeholder="Max prijs per dag"/>
    <input  style="margin-top: 4px;" type="number" name="Min prijsperdag" id="kampterreinzoeker_minprijs" placeholder="Min prijs per dag"/>
  </div>
  <button style="margin-top: 4px;" type="button" onclick="zoekKampterrein()">zoek</button>
  <div style="margin-top: 12px;">
    <table id="kampterreinen_table" class="center">
      <thead>
          <tr>
              <th>Type</th>
              <th>Locatie</th>
              <th>Prijs per dag</th>
              <th>Contactinfo</th>
              <th>Coordinaten</th>
          </tr>
      </thead>
    </table>
  </div>
</div>
<div style="margin-left: 100px;margin-top: 12px;">
  <a id="wijzigen-anchor"><h2>Wijzigen</h2></a>
  <div style="margin-top: 12px;">
    <select  style="margin-top: 4px;" name="type_tag" id="kampterreinwijzigen_type">
      <option value="wei">Wei</option>
      <option value="gebouw">Gebouw</option>
      <option value="beide">Wei en gebouw</option>
    </select>
    <input  style="margin-top: 4px;" type="text" name="Locatie" id="kampterreinwijzigen_locatie" placeholder="Locatie" />
    <input  style="margin-top: 4px;" type="number" name="Prijsperdag" id="kampterreinwijzigen_prijs" placeholder="Prijs per dag"/>
    <input  style="margin-top: 4px;" type="text" name="Contactinfo" id="kampterreinwijzigen_contactinfo" placeholder="Contactinfo" />
  </div>
  <button style="margin-top: 4px;" type="button" onclick="wijzigKampterrein()">wijzigen</button>
  <p id="kampterreinwijzigen_status" style="margin-top: 4px;">Status</p>
</div>
<div style="margin-left: 50px;margin-top: 120%;">
  <p>The end of the page</p>
</div>
@stop