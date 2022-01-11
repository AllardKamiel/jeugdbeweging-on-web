<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JOW - @yield('subtitle')</title>
  {{-- <link rel="stylesheet" href="css/style.css"> --}}
  <link rel="stylesheet" href="{{ URL::asset('css/style.css') }}">
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src="{{ URL::asset('functies.js') }}"></script>
  <script type="text/javascript" src="{{ URL::asset('js/activiteitenfuncties.js') }}"></script>
  <script type="text/javascript" src="{{ URL::asset('js/kampterreinfuncties.js') }}"></script>
  <script type="text/javascript" src="{{ URL::asset('js/themafuncties.js') }}"></script>
  <script type="text/javascript" src="{{ URL::asset('js/materiaalfuncties.js') }}"></script>
  <script type="text/javascript" src="{{ URL::asset('js/ratingfuncties.js') }}"></script>
  <script type="text/javascript" src="{{ URL::asset('js/jquery.soap.js') }}"></script>
  <script type="text/javascript" src="{{ URL::asset('js/jquery.format.js') }}"></script>
  <link rel="shortcut icon" href="{{ URL::asset('images/logo2small.png') }}" />
  <style>
    th, td {
    background-color: #00986f;
    border-style:solid;
    border-color: #fff;
    padding: 5px;
    }
    table.center {
    margin-left: auto; 
    margin-right: auto;
    }
</style>
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
              <a href="/activiteit"><li>Activiteiten</li></a>
              <a href="/activiteitCalender"><li>Kalender</li></a>
              <a href="/themazoeker"><li>Thema zoeker</li></a>
              <a href="/kampterreinen"><li>Kampterreinen</li></a>
              <a href="/materiaal"><li>Materiaal</li></a>
              <a href="#" onclick="window.open('mailto:arne.duyver@student.uhasselt.be?Subject=Jeugdbeweging On Web: Support','','200','200');"><li>Info & Contact</li></a>
              <a href="https://www.uhasselt.be/" target="_blank"><li>Show me more</li></a>
              <a><li>
                <form method="POST" action="{{ route('logout') }}">
                  @csrf
                
                  <x-jet-responsive-nav-link href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                  this.closest('form').submit();">
                      {{ __('Log Out') }}
                  </x-jet-responsive-nav-link>
                </form>
              </li></a>
            </ul>
          </div>
        </nav>
      </div>
      {{-- END menu --}}
      <img src="{{ URL::asset('images/logo2.png') }}" class="logo-img"> {{-- source img: https://www.youth-movement.org --}}
      @yield("tab_headers")
    </nav>
    @yield("content")
  </div>

<script src=functies.js></script>
</body>
</html>