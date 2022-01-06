@extends("master")
@section("subtitle","Home")


@section("content")
<div style="margin-left: 50px;">
  <h1>Activiteit detail &#128512;</h1>
  <div style="margin-top: 30px;">
    <p>titel</p>
    <input  style="margin-top: 4px;" type="text" name="title" id="zoekActiviteit_title" placeholder="zoeken op titel" /><br>
    <p>thema</p>
    <input  style="margin-top: 4px;" type="text" name="thema_tag" id="zoekActiviteit_thema_tag" placeholder="zoeken op thema" /><br>
    <p>setting</p>
    <select  style="margin-top: 4px;" name="setting_tag" id="zoekActiviteit_setting_tag">
        <option value="binnen">binnen</option>
        <option value="buiten">buiten</option>
        <option value="beide">beide</option>
    </select><br>
    <p>minimum leeftijd</p>
    <input  style="margin-top: 4px;" type="number" name="age_min" id="zoekActiviteit_age_min" value="0" /><br>
    <p>maximum leeftijd</p>
    <input  style="margin-top: 4px;" type="number" name="age_max" id="zoekActiviteit_age_max" value="100" /><br>
    <p>minimum aantal personen</p>
    <input  style="margin-top: 4px;" type="number" name="pers_min" id="zoekActiviteit_pers_min" value="0" /><br>
    <p>maximum aantal personen</p>
    <input  style="margin-top: 4px;" type="number" name="pers_max" id="zoekActiviteit_pers_max" value="100" /><br>
    <button style="margin-top: 4px;" type="button" onclick="zoekActiviteit()">zoek</button>


  </div>
</div>


@stop