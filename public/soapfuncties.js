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
  fetch("http://localhost:8000/SOAPpostXML.php", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(content)
  })
    .then(response => response.json())
    .then(json => console.log(json.uitkomst))
    .catch(err => alert(err));

  //   var id = "materiaalzoeker_result";
  //   setStatus(id, "Hello there");
  //   document.getElementById(id).style.color = "#fff";
}
