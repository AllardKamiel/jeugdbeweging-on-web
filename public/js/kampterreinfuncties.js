
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
var coordinatenPromises = [];
var KTcoorlist = [];
var KTtypelist = [];
var KTlocatielist = [];
var KTppdlist = [];
var KTcontactlist = [];
function vulKampterreinTabel(data) {
  $(document).ready(function () {
    trHTMLkampterreinen = "";
    coordinatenPromises = [];
    KTcoorlist = [];
    KTtypelist = [];
    KTlocatielist = [];
    KTppdlist = [];
    KTcontactlist = [];
    $("#kampterreinen_table tbody tr").remove();
    //console.log(data["data"].length);
    for (var i = 0; i < data["data"].length; i++) {
      var url = "http://api.positionstack.com/v1/forward?access_key=03ef301c1cdff1f3da1159f73730c7eb&query=" + encodeURIComponent(data["data"][i]["locatie"]);
      coordinatenPromises.push(fetch(url));
      console.log(data["data"][i]["type"] + " - " + data["data"][i]["locatie"] + " - " + data["data"][i]["prijsperdag"] + " - " + data["data"][i]["contactinfo"] + " - ")
      KTtypelist.push(data["data"][i]["type"]);
      KTlocatielist.push(data["data"][i]["locatie"]);
      KTppdlist.push(data["data"][i]["prijsperdag"]);
      KTcontactlist.push(data["data"][i]["contactinfo"]);
    }
    Promise.all(coordinatenPromises).then(function (response) {
      response.forEach(element => {
        element.json().then(function (response) {
          if (response["data"].length > 0) {
            var lat = response["data"][0]["latitude"];
            var lon = response["data"][0]["longitude"];
            KTcoorlist.push("lat: " + lat + " | lon: " + lon);
          } else {
            KTcoorlist.push("NO COORDINATES FOUND");
          }
          for (var i = 0; i < KTcoorlist.length; i++) {
            trHTMLkampterreinen += '<tbody><tr><td>' + KTtypelist[i] + '</td><td>' + KTlocatielist[i] + '</td><td>' + KTppdlist[i] + '</td><td>' + KTcontactlist[i] + '</td><td>' + KTcoorlist[i] + '</td></tbody>';
          }
          console.log(trHTMLkampterreinen);
          document.getElementById('kampterreinen_table').innerHTML = "<thead><tr><th>Type</th><th>Locatie</th><th>Prijs per dag</th><th>Contactinfo</th><th>Coordinaten</th></tr></thead>" + trHTMLkampterreinen;
          trHTMLkampterreinen = "";
        })
      })
    });
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
