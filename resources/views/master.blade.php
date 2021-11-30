<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JOW - @yield('subtitle')</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="hero">
    <nav>
      <img src="images/menu.png" class="menu-img">
      <img src="images//logo.png" class="logo">
      <ul>
        <li><a href="">Latest</a>></li>
        <li><a href="">Modern</a>></li>
        <li><a href="">Contemporary</a>></li>
        <li><a href="">Affordable</a>></li>
      </ul>
      <button type="button" onclick="toggleBtn()" id="btn"><span></span></button>
    </nav>
  
    @yield("content")
    <div class="lampcontainer">
      <img src="images/lamp.png" class="lamp">
      <img src="images/light.png" class="light" id="light">
    </div>

    <div class="text-container">
      <h1>Latest<br>in Lighting</h1>
      <p>
        This is the first lamp from our company. We're making a huge collection of modern Lamps in all categories from home use to office use.
      </p>
      <a href="">Check All Collections</a>
      <div class="control">
        <p>04</p>
        <div class="line"><span></span></div>
        <p>05</p>
      </div>
    </div>
  </div>



<script>
  var btn = document.getElementById("btn");
  var light = document.getElementById("light");
  function toggleBtn(){
    btn.classList.toggle("active")
    light.classList.toggle("on")
  }
</script>
</body>
</html>