
var portKampterrein = ""//8089
var baseUrl_KampterreinAPI = "https://kampterreinapi.kindeyeindustries.com"//"http://localhost:"

function zoekKampterrein() {
  Kampterrein_list = [];
  console.log("zoekKampterrein clicked");
  var kampterreinzoeker_type = document.getElementById("kampterreinzoeker_type").value;
  var locatie = "no_value_locatie";
  var maxprijs = 100000;
  var minprijs = 0;

  if (document.getElementById("kampterreinzoeker_locatie").value != "") {
    locatie = encodeURIComponent(document.getElementById("kampterreinzoeker_locatie").value);
  } if (document.getElementById("kampterreinzoeker_maxprijs").value != "") {
    maxprijs = parseInt(document.getElementById("kampterreinzoeker_maxprijs").value);
  } if (document.getElementById("kampterreinzoeker_minprijs").value != "") {
    minprijs = parseInt(document.getElementById("kampterreinzoeker_minprijs").value);
  }


  axios.get(baseUrl_KampterreinAPI + portKampterrein + "/api/kampterrein/" + kampterreinzoeker_type + "/" + locatie + "/" + minprijs + "/" + maxprijs, {
    method: 'GET',
    mode: 'no-cors'
  })
    .then((data) => {
      var terreinen = data;
      console.log(terreinen);
      vulKampterreinTabel(terreinen);
    },
      (error) => {
        console.log(error);
      });

}
var Kampterrein_list = [];
function vulKampterreinTabel(data) {
  $(document).ready(function () {

    $("#kampterreinen_table tbody tr").remove();
    var trHTML = '';
    console.log(data["data"].length);
    for (var i = 0; i < data["data"].length; i++) {
      trHTML += '<tbody><tr><td>' + data["data"][i]["type"] + '</td><td>' + data["data"][i]["locatie"] + '</td><td>' + data["data"][i]["prijsperdag"] + '</td><td>' + data["data"][i]["contactinfo"] + '</td><td>' + "API" + '</td></tbody>'; //TODO API coordinates
    }
    console.log(trHTML);
    $('#kampterreinen_table').append(trHTML);
  })
}
function wijzigKampterrein() {
  console.log("wijzigKampterrein clicked");
  var type = document.getElementById("kampterreinwijzigen_type").value;
  var locatie = "no_value_locatie";
  var prijsperdag = -1;
  var contactinfo = "no_value_conatactinfo";

  if (document.getElementById("kampterreinwijzigen_locatie").value != "") {
    locatie = document.getElementById("kampterreinwijzigen_locatie").value;
  } if (document.getElementById("kampterreinwijzigen_prijs").value != "") {
    prijsperdag = parseInt(document.getElementById("kampterreinwijzigen_prijs").value);
  } if (document.getElementById("kampterreinwijzigen_contactinfo").value != "") {
    contactinfo = document.getElementById("kampterreinwijzigen_contactinfo").value;
  }
  console.log(type + " - " + locatie + " - " + prijsperdag + " - " + contactinfo);
  var inhoud = {
    'type': String(type),
    'locatie': String(locatie),
    'prijsperdag': String(prijsperdag),
    'contactinfo': String(contactinfo)
  }
  var jsonmsgString = JSON.stringify(inhoud);
  var jsonmsg = JSON.parse(jsonmsgString);
  var url = baseUrl_KampterreinAPI + portKampterrein + "/api/kampterrein";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
      setStatus("kampterreinwijzigen_status", "SUCCES");
    }
  };

  var data = '{"type": "' + String(type) + '","locatie": "' + String(locatie) + '","prijsperdag": ' + prijsperdag + ',"contactinfo": "' + String(contactinfo) + '"}';

  xhr.send(data);
}
