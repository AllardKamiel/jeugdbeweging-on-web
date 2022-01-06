@extends("master")
@section("subtitle","Home")


@section("content")
<div style="margin-left: 50px;">
  <h1>Voeg een activiteit toe &#128512;</h1>
  <div style="margin-top: 30px;">
    <p>titel</p>
    <input  style="margin-top: 4px;" type="text" name="title" id="voegToeActiviteit_title" placeholder="titel" /><br>
    <p>thema 1</p>
    <input  style="margin-top: 4px;" type="text" name="thema_tag" id="voegToeActiviteit_thema_tag1" placeholder="thema 1" /><br>
    <p>thema 2</p>
    <input  style="margin-top: 4px;" type="text" name="thema_tag" id="voegToeActiviteit_thema_tag2" placeholder="thema 2" /><br>
    <p>thema 3</p>
    <input  style="margin-top: 4px;" type="text" name="thema_tag" id="voegToeActiviteit_thema_tag3" placeholder="thema 3" /><br>
    <p>setting</p>
    <select  style="margin-top: 4px;" name="setting_tag" id="voegToeActiviteit_setting_tag">
        <option value="binnen">binnen</option>
        <option value="buiten">buiten</option>
        <option value="beide">beide</option>
    </select><br>
    <p>minimum leeftijd</p>
    <input  style="margin-top: 4px;" type="number" name="age_min" id="voegToeActiviteit_age_min" value="0" /><br>
    <p>maximum leeftijd</p>
    <input  style="margin-top: 4px;" type="number" name="age_max" id="voegToeActiviteit_age_max" value="100" /><br>
    <p>minimum aantal personen</p>
    <input  style="margin-top: 4px;" type="number" name="pers_min" id="voegToeActiviteit_pers_min" value="0" /><br>
    <p>maximum aantal personen</p>
    <input  style="margin-top: 4px;" type="number" name="pers_max" id="voegToeActiviteit_pers_max" value="100" /><br>
    <p>beschrijving</p>
    <input  style="margin-top: 4px;" type="text" name="beschrijving" id="voegToeActiviteit_beschrijving" placeholder="beschrijving" /><br>
    <p>spelduur in minuten</p>
    <input  style="margin-top: 4px;" type="number" name="spelduur" id="voegToeActiviteit_duration" value="100" /><br>
    <p>link</p>
    <input  style="margin-top: 4px;" type="text" name="link" id="voegToeActiviteit_links" placeholder="link" /><br>
    <p>matriaallijst</p>
    <input  style="margin-top: 4px;" type="text" name="matriaallijst" id="voegToeActiviteit_matriaallijst" placeholder="matriaallijst"/><br>
    <p>extra assets</p>
    <input  style="margin-top: 4px;" type="text" name="extra_assets" id="voegToeActiviteit_extra_assets" placeholder="extra assets"/><br>

    <button style="margin-top: 4px;" type="button" onclick="voegToeActiviteit()">VoegToe</button>
    </div>
</div>


@stop