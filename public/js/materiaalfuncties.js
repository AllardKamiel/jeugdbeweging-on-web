function makeHttpObject() {
  try { return new XMLHttpRequest(); }
  catch (error) { }
  try { return new ActiveXObject("Msxml2.XMLHTTP"); }
  catch (error) { }
  try { return new ActiveXObject("Microsoft.XMLHTTP"); }
  catch (error) { }

  throw new Error("Could not create HTTP request object.");
}

function zoekMateriaal() {
  console.log("Hier moet de SOAP functie komen");
  var port = 8000;
  //TODO
  var naam = 'testNaam';
  var locatie = 'testLocatie';
  var prijsperdag = -1;
  var contactinfo = 'test';
  var beschikbaar = -1;
  var fotolink = 'test';
  var usernaam = 'Nikske';
  var aantal = -1;
  var query = 'getLijstMateriaal';

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
      console.log(materiaalNaam + " Woehoe")
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
    // addRowHandlersMateriaal()
  })
}
