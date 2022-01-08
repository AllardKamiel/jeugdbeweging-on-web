@extends("master")
@section("subtitle","Home")

@section("tab_headers")
<ul style="margin-right: 10%;">
  <li><a href="/activiteitCalender_voegToe">Voeg activiteit toe</a></li>
</ul>
@stop

@section("content")
<div style="margin-left: 50px;">
  <h1>activiteiten kalender &#128512;</h1>
  <div style="margin-top: 30px;">
    <p>titel</p>
    <input  style="margin-top: 4px;" type="text" name="title" id="zoekActiviteitCalender_title" placeholder="zoeken op titel" /><br>
    <p>thema</p>
    <input  style="margin-top: 4px;" type="date" name="thema_tag" id="zoekActiviteitCalender_datum"/><br>
    <p>groep</p>
    <select  style="margin-top: 4px;" name="groep" id="zoekActiviteitCalender_groep">
        <option value=""> -- select an option -- </option>
        <option value="Scouts Peer">Scouts Peer</option>
        <option value="Scouts Hamont">Scouts Hamont</option>
        <option value="Chiro Grote-Brogel">Chiro Grote-Brogel</option>
    </select><br>
    <p>subgroep</p>
    <select  style="margin-top: 4px;" name="subgroep" id="zoekActiviteitCalender_subgroep">
        <option value=""> -- select an option -- </option>
        <option value="Givers">Givers</option>
        <option value="Jong givers">Jong givers</option>
        <option value="Kawelpen">Kawelpen</option>
    </select><br>

    <button style="margin-top: 4px;" type="button" onclick="zoekActiviteitCalender()">zoek</button>

    <table id="activiteit_calender_table" class="center">
        <thead>
            <tr>
                <th>Titel</th>
                <th>Datum</th>
                <th>Start uur</th>
                <th>Eind uur</th>
                <th>Groep</th>
                <th>Sub groep</th>
            </tr>
        </thead>
    </table>
    </div>
</div>


@stop