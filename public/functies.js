var btn = document.getElementById("btn");
function toggleBtn() {
  console.log("button hit")
  btn.classList.toggle("active")
}

function setStatus(id, msg) {
  document.getElementById(id).innerHTML = msg;
}
