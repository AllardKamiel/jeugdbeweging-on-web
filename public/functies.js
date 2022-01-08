var btn = document.getElementById("btn");
function toggleBtn() {
  console.log("button hit")
  btn.classList.toggle("active")
}

function setStatus(id, msg) {
  document.getElementById(id).innerHTML = msg;
}

//THEMA ZOEKER
function zoekThema() {
  var aantal = parseInt(document.getElementById("themazoeker_aantal").value);
  axios.get("http://localhost:8088/api/themas/" + aantal, {
    method: 'GET',
    mode: 'no-cors'
  })
    .then((data) => {
      var themas = data["data"];
      var msg = '';
      for (var i = 0; i < themas.length - 1; i++) {
        msg += data["data"][i]["content"] + ", ";
      }
      msg += data["data"][themas.length - 1]["content"] + ".";
      var id = "themazoeker_result";
      setStatus(id, msg);
      document.getElementById(id).style.color = "#fff";
    },
      (error) => {
        console.log(error);
      });
}

function opslaanThema() {
  var thema_text = String(document.getElementById("themazoeker_text").value);
  var id = "themazoeker_status";
  axios.post("http://localhost:8088/api/themas", {
    method: 'POST',
    mode: 'no-cors',
    data: {
      'content': thema_text
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      console.log(response.status);
      setStatus(id, response.status);
    },
      (error) => {
        console.log(error);
      })
}


//ACTIVITEITEN functies
var Activity_list = [];

function zoekActiviteit() {
  var title = document.getElementById("zoekActiviteit_title").value;
  if (title == "") {
    title = "Null"
  }
  var thema_tag = document.getElementById("zoekActiviteit_thema_tag").value;
  if (thema_tag == "") {
    thema_tag = "Null"
  }
  var setting_tag = document.getElementById("zoekActiviteit_setting_tag").value;
  var age_min = parseInt(document.getElementById("zoekActiviteit_age_min").value);
  var age_max = parseInt(document.getElementById("zoekActiviteit_age_max").value);
  var pers_min = parseInt(document.getElementById("zoekActiviteit_pers_min").value);
  var pers_max = parseInt(document.getElementById("zoekActiviteit_pers_max").value);

  var service = "http://localhost:5000/api/";
  $(document).ready(function () {

    jQuery.support.cors = true;

    $.ajax(
      {
        type: "GET",
        url: service + "activity/read/" + title + "/" + thema_tag + "/" + setting_tag + "/" + age_min + "/" + age_max + "/" + pers_min + "/" + pers_max,
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
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


function zoekActiviteitCalender() {
  var title = document.getElementById("zoekActiviteitCalender_title").value;
  if (title == "") {
    title = "Null"
  }
  var date = document.getElementById("zoekActiviteitCalender_datum").value;
  if (date == "") {
    date = "Null"
  }
  var group = document.getElementById("zoekActiviteitCalender_groep").value;
  if (group == "") {
    group = "Null"
  }
  var sub_group = document.getElementById("zoekActiviteitCalender_subgroep").value;
  if (sub_group == "") {
    sub_group = "Null"
  }


  var service = "http://localhost:5000/api/";
  $(document).ready(function () {

    jQuery.support.cors = true;

    $.ajax(
      {
        type: "GET",
        url: service + "activity/read/" + title + "/" + date + "/" + group + "/" + sub_group ,
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache: false,
        success: function (data) {
          $("#activiteit_calender_table tbody tr").remove();
          var trHTML = '';



          $.each(data, function (key, value) {

            trHTML += '<tbody><tr><td>' + value.title + '</td><td>' + value.date + '</td><td>' + value.start_hour + '</td><td>' + value.end_hour + '</td><td>' + value.group + '</td><td>' + value.sub_group + '</td></tr></tbody>';
          });
          $('#activiteit_calender_table').append(trHTML);
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
    ActiviteitDetail();
  };
}


function ActiviteitDetail() {
  var page = 'http://127.0.0.1:8000/activiteit_detail';
  window.open(page, "_blank").focus();
}


function fillActiviteitDetail() {
  var activities = JSON.parse(localStorage.getItem("activities"));
  var row = JSON.parse(localStorage.getItem("row"));
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
    url: "http://localhost:5000/api/activity",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify(json),
    contentType: "application/json;",
    dataType: "json",
    success: function (data) { alert(data); },
    error: function (errMsg) {
      alert(errMsg);
    }
  });
}


function voegToeActiviteitCalender() {
  titel = document.getElementById("voegToeActiviteitCalender_title").value;
  date = document.getElementById("voegToeActiviteitCalender_date").value;
  group = document.getElementById("zoekActiviteitCalender_groep").value;
  sub_group = document.getElementById("zoekActiviteitCalender_subgroep").value;
  start_hour = document.getElementById("voegToeActiviteitCalender_start_hour").value;
  end_hour = document.getElementById("voegToeActiviteitCalender_end_hour").value;


  var json = {
    "date": date,
    "end_hour": end_hour,
    "group": group,
    "start_hour": start_hour,
    "sub_group": sub_group ,
    "title": titel
  }

  jQuery.support.cors = true;
  $.ajax({
    type: "POST",
    url: "http://localhost:5000/api/activity_calender",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify(json),
    contentType: "application/json;",
    dataType: "json",
    success: function (data) { alert(data); },
    error: function (errMsg) {
      alert(errMsg);
    }
  });
}