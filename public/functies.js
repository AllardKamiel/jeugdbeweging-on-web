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
<<<<<<< HEAD
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



function zoekActiviteit(){
  var title = document.getElementById("zoekActiviteit_title").value;
  if (title == ""){
    title = "Null"
  }
  var thema_tag = document.getElementById("zoekActiviteit_thema_tag").value;
  if (thema_tag == ""){
    thema_tag = "Null"
  }
  var setting_tag = document.getElementById("zoekActiviteit_setting_tag").value;
  var age_min = parseInt(document.getElementById("zoekActiviteit_age_min").value);
  var age_max = parseInt(document.getElementById("zoekActiviteit_age_max").value);
  var pers_min = parseInt(document.getElementById("zoekActiviteit_pers_min").value);
  var pers_max = parseInt(document.getElementById("zoekActiviteit_pers_max").value);

  var service = "http://localhost:5000/api/";
  var Activity_list = [];
  $(document).ready(function(){

      jQuery.support.cors = true;

      $.ajax(
      {
          type: "GET",
          url: service + "activity/read/" + title +"/"+ thema_tag +"/"+ setting_tag +"/"+ age_min +"/"+ age_max +"/"+ pers_min +"/"+ pers_max,
          data: "{}",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          cache: false,
          success: function (data) {
          $("#activiteit_table tbody tr").remove();   
          var trHTML = '';
          
            
          $.each(data, function (key, value) {
              
              trHTML += '<tbody><tr style="cursor:pointer"><td>' + value.title + '</td><td>' + value.description + '</td><td>' + value.pers_min+ '</td><td>' + value.pers_max+'</td><td>' + value.age_min+'</td><td>' + value.age_max+'</td></tr></tbody>';
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

function createClickHandler(row) {
  return function() { 
    var row_number = row.rowIndex ;
    ActiviteitDetail(row_number);
  };
}


function ActiviteitDetail(row_number) {
  var page = 'http://127.0.0.1:8000/activiteit_detail';
  window.open(page, "_blank").focus();
 }
=======
  const json = JSON.stringify({
    "content": thema_text
  });
  if (thema_text != "") {
    //console.log(json);
    axios.post("http://localhost:8088/api/themas", json, {
      method: 'POST',
      mode: 'no-cors',
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
        });
  }
}
>>>>>>> 8a370d5d87a843ea0626e9a919d7eb8fed0583f7
