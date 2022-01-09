var portThema = ""//8088
var baseUrl_ThemaAPI = "https://themaapi.kindeyeindustries.com"//"http://localhost:"
function zoekThema() {
  var aantal = parseInt(document.getElementById("themazoeker_aantal").value);
  axios.get(baseUrl_ThemaAPI + portThema + "/api/themas/" + aantal, {
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
  axios.post(baseUrl_ThemaAPI + portThema + "/api/themas", {
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

//TODO function go to activiteiten met themas
