function makeHttpObject() {
  try { return new XMLHttpRequest(); }
  catch (error) { }
  try { return new ActiveXObject("Msxml2.XMLHTTP"); }
  catch (error) { }
  try { return new ActiveXObject("Microsoft.XMLHTTP"); }
  catch (error) { }

  throw new Error("Could not create HTTP request object.");
}

//TODO
function getTheUserName() {
  return "no_value_FOUND_usernaam"
}

function zoekMateriaal() {
  console.log("Hier moet de SOAP functie komen");
  var port = 8000;

  var naam = 'no_value_given_naam';
  var locatie = 'no_value_given_locatie';
  var prijsperdag = -1;
  var contactinfo = 'no_value_given_contactinfo';
  var beschikbaar = -2;
  var fotolink = 'no_value_given_fotolink';
  var usernaam = 'no_value_given_usernaam';
  var aantal = -3;
  var query = 'getLijstMateriaal';

  if (document.getElementById("materiaalzoeker_materiaalnaam").value != "") {
    naam = document.getElementById("materiaalzoeker_materiaalnaam").value.toLowerCase();
  }
  if (document.getElementById("materiaalzoeker_locatienaam").value != "") {
    locatie = document.getElementById("materiaalzoeker_locatienaam").value.toLowerCase();
  }
  beschikbaar = parseInt(document.getElementById("materiaalzoeker_beschikbaar").value);

  username = getTheUserName();

  let content = {
    naam: naam,
    locatie: locatie,
    usernaam: usernaam,
    aantal: aantal,
    prijsperdag: prijsperdag,
    contactinfo: contactinfo,
    beschikbaar: beschikbaar,
    fotolink: fotolink,
    query: query
  };
  fetch("http://localhost:" + port + "/SOAPpostXML.php", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(content)
  })
    .then(response => response.json())
    .then(json => {
      data = json.uitkomst;
      vulMateriaalTabel(data);
    })
    .catch(err => alert(err));
}

var Materiaal_list = [];

function vulMateriaalTabel(data) {
  $(document).ready(function () {

    $("#materiaal_table tbody tr").remove();
    var trHTML = '';
    data = JSON.parse(data);
    console.log(data);
    $.each(data, function (key, value) {
      trHTML += '<tbody><tr style="cursor:pointer"><td>' + value.Naam + '</td><td>' + value.Locatie + '</td><td>' + value.Prijsperdag + '</td><td>' + value.Contactinfo + '</td><td>' + value.Beschikbaar + '</td><td><a href="' + value.Fotolink + '" target="_blank"><img src=' + value.Fotolink + ' alt="Image" height="42" width="42"></a></td></tr></tbody>';
      materiaalNaam = value.Naam;
      materiaalLocatie = value.Locatie;
      materiaalPrijsperdag = value.Prijsperdag;
      materiaalContactinfo = value.Contactinfo;
      materiaalBeschikbaar = value.Beschikbaar;
      materiaalFotolink = value.Fotolink;

      let Materiaal = [];
      Materiaal.push(materiaalNaam);
      Materiaal.push(materiaalLocatie);
      Materiaal.push(materiaalPrijsperdag);
      Materiaal.push(materiaalContactinfo);
      Materiaal.push(materiaalBeschikbaar);
      Materiaal.push(materiaalFotolink);

      Materiaal_list.push(Materiaal);

      localStorage.setItem("materialen", JSON.stringify(Materiaal_list));

    });
    $('#materiaal_table').append(trHTML);
    // addRowHandlersMateriaal() //TODO
  })
}

function huurMateriaal() {
  console.log("huurMateriaal pressed");
  var port = 8000;

  var naam = 'no_value_given_naam';
  var locatie = 'no_value_given_locatie';
  var prijsperdag = -1;
  var contactinfo = 'no_value_given_contactinfo';
  var beschikbaar = -2;
  var fotolink = 'no_value_given_fotolink';
  var usernaam = 'no_value_given_usernaam';
  var aantal = -3;
  var query = 'huurMateriaal';

  if (document.getElementById("materiaalhuren_materiaalnaam").value != "") {
    naam = document.getElementById("materiaalhuren_materiaalnaam").value.toLowerCase();
  }
  if (document.getElementById("materiaalhuren_locatienaam").value != "") {
    locatie = document.getElementById("materiaalhuren_locatienaam").value.toLowerCase();
  }
  aantal = parseInt(document.getElementById("materiaalhuren_aantal").value);

  username = getTheUserName();

  let content = {
    naam: naam,
    locatie: locatie,
    usernaam: usernaam,
    aantal: aantal,
    prijsperdag: prijsperdag,
    contactinfo: contactinfo,
    beschikbaar: beschikbaar,
    fotolink: fotolink,
    query: query
  };
  fetch("http://localhost:" + port + "/SOAPpostXML.php", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(content)
  })
    .then(response => response.json())
    .then(json => {
      data = json.uitkomst;
      document.getElementById("materiaalhuren_status").innerHTML = data;
    })
    .catch(err => alert(err));
}


function terugbrengenMateriaal() {
  console.log("terugbrengenMateriaal pressed");
  var port = 8000;

  var naam = 'no_value_given_naam';
  var locatie = 'no_value_given_locatie';
  var prijsperdag = -1;
  var contactinfo = 'no_value_given_contactinfo';
  var beschikbaar = -2;
  var fotolink = 'no_value_given_fotolink';
  var usernaam = 'no_value_given_usernaam';
  var aantal = -3;
  var query = 'brengMateriaalTerug';

  if (document.getElementById("materiaalterugbrengen_materiaalnaam").value != "") {
    naam = document.getElementById("materiaalterugbrengen_materiaalnaam").value.toLowerCase();
  }
  if (document.getElementById("materiaalterugbrengen_locatienaam").value != "") {
    locatie = document.getElementById("materiaalterugbrengen_locatienaam").value.toLowerCase();
  }
  aantal = parseInt(document.getElementById("materiaalterugbrengen_aantal").value);

  username = getTheUserName();

  let content = {
    naam: naam,
    locatie: locatie,
    usernaam: usernaam,
    aantal: aantal,
    prijsperdag: prijsperdag,
    contactinfo: contactinfo,
    beschikbaar: beschikbaar,
    fotolink: fotolink,
    query: query
  };
  fetch("http://localhost:" + port + "/SOAPpostXML.php", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(content)
  })
    .then(response => response.json())
    .then(json => {
      data = json.uitkomst;
      document.getElementById("materiaalterugbrengen_status").innerHTML = data;
    })
    .catch(err => alert(err));
}

function toevoegenMateriaal() { //TODO
  console.log("toevoegenMateriaal pressed");
  var port = 8000;

  var naam = 'no_value_given_naam';
  var locatie = 'no_value_given_locatie';
  var prijsperdag = -1;
  var contactinfo = 'no_value_given_contactinfo';
  var beschikbaar = -2;
  var fotolink = 'no_value_given_fotolink';
  var usernaam = 'no_value_given_usernaam';
  var aantal = -3;
  var query = 'voegMateriaalToe';

  if (document.getElementById("materiaaltoevoegen_materiaalnaam").value != "") {
    naam = document.getElementById("materiaaltoevoegen_materiaalnaam").value;
  }
  if (document.getElementById("materiaaltoevoegen_locatienaam").value != "") {
    locatie = document.getElementById("materiaaltoevoegen_locatienaam").value;
  }
  if (document.getElementById("materiaaltoevoegen_prijsperdag").value != "") {
    prijsperdag = parseInt(document.getElementById("materiaaltoevoegen_prijsperdag").value);
  }
  if (document.getElementById("materiaaltoevoegen_Contactinfo").value != "") {
    contactinfo = document.getElementById("materiaaltoevoegen_Contactinfo").value;
  }
  if (document.getElementById("materiaaltoevoegen_beschikbaar").value != "") {
    prijsperdag = parseInt(document.getElementById("materiaaltoevoegen_beschikbaar").value);
  }
  if (document.getElementById("materiaaltoevoegen_fotolink").value != "") {
    contactinfo = document.getElementById("materiaaltoevoegen_fotolink").value;
  }


  username = getTheUserName();

  let content = {
    naam: naam,
    locatie: locatie,
    usernaam: usernaam,
    aantal: aantal,
    prijsperdag: prijsperdag,
    contactinfo: contactinfo,
    beschikbaar: beschikbaar,
    fotolink: fotolink,
    query: query
  };
  console.log(content);
  fetch("http://localhost:" + port + "/SOAPpostXML.php", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(content)
  })
    .then(response => response.json())
    .then(json => {
      data = json.uitkomst;
      document.getElementById("materiaaltoevoegen_status").innerHTML = data;
    })
    .catch(err => alert(err));
}

function toonGehuurdMateriaal() {
  console.log("toonGehuurdMateriaal pressed");
  var port = 8000;

  var naam = 'no_value_given_naam';
  var locatie = 'no_value_given_locatie';
  var prijsperdag = -1;
  var contactinfo = 'no_value_given_contactinfo';
  var beschikbaar = -2;
  var fotolink = 'no_value_given_fotolink';
  var usernaam = 'no_value_given_usernaam';
  var aantal = -3;
  var query = 'toonGehuurdMateriaal';

  username = getTheUserName();

  let content = {
    naam: naam,
    locatie: locatie,
    usernaam: usernaam,
    aantal: aantal,
    prijsperdag: prijsperdag,
    contactinfo: contactinfo,
    beschikbaar: beschikbaar,
    fotolink: fotolink,
    query: query
  };
  fetch("http://localhost:" + port + "/SOAPpostXML.php", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(content)
  })
    .then(response => response.json())
    .then(json => {
      data = json.uitkomst;
      vulMateriaalGehuurdTabel(data);
    })
    .catch(err => alert(err));
}

var MateriaalGehuurd_list = [];

function vulMateriaalGehuurdTabel(data) {
  $(document).ready(function () {

    $("#materiaalGehuurd_table tbody tr").remove();
    var trHTML = '';
    data = JSON.parse(data);
    console.log(data);
    $.each(data, function (key, value) {
      trHTML += '<tbody><tr style="cursor:pointer"><td>' + value.Materiaalnaam + '</td><td>' + value.Materiaallocatie + '</td><td>' + value.AantalGehuurd + '</td></tbody>';
      materiaalNaam = value.Materiaalnaam;
      materiaalLocatie = value.Materiaallocatie;
      materiaalAantal = value.AantalGehuurd;

      let MateriaalGehuurd = [];
      MateriaalGehuurd.push(materiaalNaam);
      MateriaalGehuurd.push(materiaalLocatie);
      MateriaalGehuurd.push(materiaalAantal);

      MateriaalGehuurd_list.push(MateriaalGehuurd);

      localStorage.setItem("materialenGehuurd", JSON.stringify(MateriaalGehuurd_list));

    });
    $('#materiaalGehuurd_table').append(trHTML);
  })

};
