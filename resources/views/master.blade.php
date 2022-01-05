<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JOW - @yield('subtitle')</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script type="text/javascript" src="functies.js"></script>
  <link rel="shortcut icon" href="images/logo2small.png" />
</head>
<body>
  
  <div class="hero">
    <nav>
      {{-- BEGIN menu --}}
      <!--    Made by Erik Terwan    -->
      <!--   24th of November 2015   -->
      <!--        MIT License        -->
      <div class='menu'>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="/home"><li>Home</li></a>
              <a href="#"><li>Activiteiten</li></a>
              <a href="/themazoeker"><li>Thema zoeker</li></a>
              <a href="#"><li>Kampterreinen</li></a>
              <a href="#"><li>Lokalenverhuur</li></a>
              <a href="#"><li>Materiaal</li></a>
              <a href="#"><li>Info & Contact</li></a>
              <a href="https://www.uhasselt.be/" target="_blank"><li>Show me more</li></a>
            </ul>
          </div>
        </nav>
      </div>
      {{-- END menu --}}
      <img src="images/logo2.png" class="logo-img"> {{-- source img: https://www.youth-movement.org --}}
      @yield("tab_headers")
    </nav>
    @yield("content")
  </div>

<script src=functies.js></script>
</body>
</html>