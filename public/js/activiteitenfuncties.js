var Activity_list = [];

var activiteitenApiPort = "";//5001;
var baseUrl_activiteitenAPI = "http://activiteitapi.kindeyeindustries.com";//"http://localhost:";


function getTheUserNameActiviteit() {
  var naam = document.getElementById("activiteit_detail_usernaam").innerHTML;
  return naam;
}

function zoekActiviteitOpweer() {
  jQuery.support.cors = true;

  $.ajax(
    {
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/forecast?q=diepenbeek&appid=82d2feca0d3e9673a9f1cd037b9ea810",
      cache: false,
      success: function (data) {
        weer = data["list"][0]["weather"]["0"]["main"];
        var settingbyweer = 'beide';
        console.log(weer);
        if (weer == "Rain") {
          settingbyweer = "binnen";
        } else if (weer == "Clouds") {
          settingbyweer = "beide";
        } else if (weer == "Clear") {
          settingbyweer = "buiten";
        }
        zoekActiviteit(settingbyweer)
      }
    });
}

function zoekActiviteit(settingbyweer) {
  localStorage.clear();
  Activity_list = [];
  var title = document.getElementById("zoekActiviteit_title").value;
  if (title == "") {
    title = "Null"
  }
  if (typeof settingbyweer == "undefined") {
    var thema_tag = document.getElementById("zoekActiviteit_thema_tag").value;
    if (thema_tag == "") {
      thema_tag = "Null"
    }
  } else { thema_tag = settingbyweer; }
  var setting_tag = document.getElementById("zoekActiviteit_setting_tag").value;
  var age_min = parseInt(document.getElementById("zoekActiviteit_age_min").value);
  var age_max = parseInt(document.getElementById("zoekActiviteit_age_max").value);
  var pers_min = parseInt(document.getElementById("zoekActiviteit_pers_min").value);
  var pers_max = parseInt(document.getElementById("zoekActiviteit_pers_max").value);

  var service = baseUrl_activiteitenAPI + activiteitenApiPort + "/api/";
  $(document).ready(function () {

    jQuery.support.cors = true;
    $.ajax(
      {
        type: "GET",
        url: service + "activity/read/" + title + "/" + thema_tag + "/" + setting_tag + "/" + age_min + "/" + age_max + "/" + pers_min + "/" + pers_max,
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: { 'X-API-KEY': "asdf1234567890" },
        cache: false,
        success: function (data) {
          $("#activiteit_table tbody tr").remove();
          var trHTML = '';



          $.each(data, function (key, value) {

            trHTML += '<tbody><tr style="cursor:pointer"><td>' + value.title + '</td><td>' + value.description + '</td><td>' + value.pers_min + '</td><td>' + value.pers_max + '</td><td>' + value.age_min + '</td><td>' + value.age_max + '</td></tr></tbody>';
            activity_id = value.activity_id;
            age_max = value.age_max;
            age_min = value.age_min;
            description = value.description;
            duration = value.duration;
            extra_assets = value.extra_assets;
            links = value.links;
            material_list = value.material_list;
            pers_max = value.pers_max;
            pers_min = value.pers_min;
            setting_tag = value.setting_tag;
            thema_tag_1 = value.thema_tag_1;
            thema_tag_2 = value.thema_tag_2;
            thema_tag_3 = value.thema_tag_3;
            title = value.title;

            let Activity = [];

            Activity.push(activity_id);
            Activity.push(title);
            Activity.push(description);
            Activity.push(duration);
            Activity.push(age_min);
            Activity.push(age_max);
            Activity.push(pers_min);
            Activity.push(pers_max);
            Activity.push(material_list);
            Activity.push(setting_tag);
            Activity.push(thema_tag_1);
            Activity.push(thema_tag_2);
            Activity.push(thema_tag_3);
            Activity.push(links);
            Activity.push(extra_assets);

            Activity_list.push(Activity);
            localStorage.setItem("activities", JSON.stringify(Activity_list));
          });
          $('#activiteit_table').append(trHTML);
          addRowHandlers()
        },

        error: function (msg) {

          alert(msg.responseText);
        }
      });
  })
}


function addRowHandlers() {
  var table = document.getElementById("activiteit_table");
  var rows = table.getElementsByTagName("tr");

  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    currentRow.onclick = createClickHandler(currentRow);
  }
}


var row_number
function createClickHandler(row) {
  return function () {
    row_number = row.rowIndex;
    localStorage.setItem("row", JSON.stringify(row_number));
    console.log(row_number);
    ActiviteitDetail();
  };
}


function ActiviteitDetail() {
  var url = window.location.origin;
  var page = url + '/activiteit_detail';
  //var page = 'http://127.0.0.1:' + laravelapplicatieport + '/activiteit_detail'; //TODO fixed it i think
  window.open(page, "_blank").focus();
}


function fillActiviteitDetail() {
  var activities = JSON.parse(localStorage.getItem("activities"));
  console.log(activities);
  var row = JSON.parse(localStorage.getItem("row"));
  console.log(row);
  document.getElementById("activiteitId").innerHTML = activities[row - 1][0];
  document.getElementById("titel").innerHTML = "titel:" + activities[row - 1][1];
  document.getElementById("duration").innerHTML = "duration:" + activities[row - 1][3] + "min";
  document.getElementById("age_min").innerHTML = "minimum leeftijd:" + activities[row - 1][4]
  document.getElementById("age_max").innerHTML = "maximum leeftijd:" + activities[row - 1][5]
  document.getElementById("pers_min").innerHTML = "minimum aantal personen:" + activities[row - 1][6]
  document.getElementById("pers_max").innerHTML = "maximum aantal personen:" + activities[row - 1][7]
  document.getElementById("setting_tag").innerHTML = "waar:" + activities[row - 1][9]
  document.getElementById("thema_tag1").innerHTML = "thema:" + activities[row - 1][10]
  document.getElementById("thema_tag2").innerHTML = "thema:" + activities[row - 1][11]
  document.getElementById("thema_tag3").innerHTML = "thema:" + activities[row - 1][12]
  document.getElementById("links").innerHTML = "link:" + activities[row - 1][13]
  document.getElementById("extra_assets").innerHTML = "extra_assets:" + activities[row - 1][14]
  document.getElementById("matriaallijst").innerHTML = "matriaallijst:" + activities[row - 1][8]
  document.getElementById("beschrijving").innerHTML = "beschrijving:" + activities[row - 1][2]
  setRatingActiviteit()
}
function voegToeActiviteit() {
  titel = document.getElementById("voegToeActiviteit_title").value
  thema1 = document.getElementById("voegToeActiviteit_thema_tag1").value
  thema2 = document.getElementById("voegToeActiviteit_thema_tag2").value
  thema3 = document.getElementById("voegToeActiviteit_thema_tag3").value
  settin_tag = document.getElementById("voegToeActiviteit_setting_tag").value
  age_min = parseInt(document.getElementById("voegToeActiviteit_age_min").value)
  age_max = parseInt(document.getElementById("voegToeActiviteit_age_max").value)
  pers_min = parseInt(document.getElementById("voegToeActiviteit_pers_min").value)
  pers_max = parseInt(document.getElementById("voegToeActiviteit_pers_max").value)
  description = document.getElementById("voegToeActiviteit_beschrijving").value
  duration = parseInt(document.getElementById("voegToeActiviteit_duration").value)
  links = document.getElementById("voegToeActiviteit_links").value
  materiaallijst = document.getElementById("voegToeActiviteit_matriaallijst").value
  extra_assets = document.getElementById("voegToeActiviteit_extra_assets").value

  var json = {
    "age_max": age_min,
    "age_min": age_max,
    "description": description,
    "duration": duration,
    "extra_assets": extra_assets,
    "links": links,
    "material_list": materiaallijst,
    "pers_max": pers_max,
    "pers_min": pers_min,
    "setting_tag": settin_tag,
    "thema_tag_1": thema1,
    "thema_tag_2": thema2,
    "thema_tag_3": thema3,
    "title": titel
  }

  jQuery.support.cors = true;
  $.ajax({
    type: "POST",
    url: baseUrl_activiteitenAPI + activiteitenApiPort + "/api/activity",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify(json),
    contentType: "application/json;",
    headers: { 'X-API-KEY': "asdf1234567890" },
    dataType: "json",
    success: function (data) { alert(data); },
    error: function (errMsg) {
      alert(errMsg);
    }
  });
}

function rateActiviteit()
{
  var id = "";
  var rating = document.getElementById("rating_select_activiteit").value;
  var activities = JSON.parse(localStorage.getItem("activities"));
  var row = JSON.parse(localStorage.getItem("row"));
  id = activities[row - 1][0];
  addRatingActiviteit(rating, getTheUserNameActiviteit(), 1, id);
  setRatingActiviteit()
}

function setRatingActiviteit()
{
  var activities = JSON.parse(localStorage.getItem("activities"));
  var row = JSON.parse(localStorage.getItem("row"));
  id = activities[row - 1][0];
  getRatingActiviteit(getTheUserNameActiviteit(), 1, id,"rating:")
}
