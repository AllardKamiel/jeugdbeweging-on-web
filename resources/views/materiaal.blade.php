@extends("master")
@section("subtitle","Materiaal verhuur")

@section("tab_headers")
<ul style="margin-right: 10%;">
  <li><a href="">Zoek</a></li>
  <li><a href="#voegtoe-anchor">Toevoegen</a></li>
</ul>
@stop

@section("content")
<div style="margin-left: 100px;">
  <p><strong>{{$materiaalnaam}}</strong></p>
  <button style="margin-top: 4px;" type="button" onclick="zoekMateriaal()">zoek</button>
  <p id="materiaalzoeker_result" style="color: red;margin-top: 4px;">Hier komt de info tevoorschijn!</p>
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
</div>

@stop