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
      document.getElementById("themazoeker_acti_btn").style.visibility = "visible";
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

function zoekActiviteitThema() {
  var text = document.getElementById("themazoeker_result").innerHTML;
  var hetThema = text.split(",")[0];
  localStorage.setItem("thema", JSON.stringify(hetThema));
  var page = 'http://127.0.0.1:' + laravelapplicatieport + '/activiteit';
  //window.open(page, "_blank").focus();
  location.replace(page);
}

window.onload = (event) => {
  var thema = JSON.parse(localStorage.getItem("thema"));
  localStorage.setItem("thema", JSON.stringify("no_thema_given"));
  if (thema != "no_thema_given") {
    document.getElementById("zoekActiviteit_thema_tag").value = thema;
  }
};
