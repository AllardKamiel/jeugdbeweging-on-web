@extends("master")
@section("subtitle","Home")


@section("content")
<div style="margin-left: 50px;">
  <h1>Voeg een activiteit toe &#128512;</h1>
  <div style="margin-top: 30px;">
    <p>titel</p>
    <input  style="margin-top: 4px;" type="text" name="title" id="voegToeActiviteitCalender_title" placeholder="titel" /><br>
    <p>datum</p>
    <input  style="margin-top: 4px;" type="date" name="date" id="voegToeActiviteitCalender_date" placeholder="thema 1" /><br>
    <p>groep</p>
    <select  style="margin-top: 4px;" name="groep" id="zoekActiviteitCalender_groep">
        <option disabled selected value> -- select an option -- </option>
        <option value="Scouts Peer">Scouts Peer</option>
        <option value="Scouts Hamont">Scouts Hamont</option>
        <option value="Chiro Grote-Brogel">Chiro Grote-Brogel</option>
    </select><br>
    <p>subgroep</p>
    <select  style="margin-top: 4px;" name="subgroep" id="zoekActiviteitCalender_subgroep">
        <option disabled selected value> -- select an option -- </option>
        <option value="Givers">Givers</option>
        <option value="Jong givers">Jong givers</option>
        <option value="Kawelpen">Kawelpen</option>
    </select><br>
    <p>start uur</p>
    <input  style="margin-top: 4px;" type="time" name="start_hour" id="voegToeActiviteitCalender_start_hour" value="13:30" /><br>
    <p>eind uur</p>
    <input  style="margin-top: 4px;" type="time" name="end_hour" id="voegToeActiviteitCalender_end_hour" value="16:30" /><br>

    <button style="margin-top: 4px;" type="button" onclick="voegToeActiviteitCalender()">VoegToe</button>
    </div>
</div>


@stop