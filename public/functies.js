var btn = document.getElementById("btn");
function toggleBtn() {
  console.log("button hit")
  btn.classList.toggle("active")
}

function setStatus(id, msg) {
  document.getElementById(id).innerHTML = msg;
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
