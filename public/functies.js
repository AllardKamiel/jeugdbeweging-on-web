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