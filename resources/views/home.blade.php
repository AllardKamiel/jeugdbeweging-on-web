@extends("master")
@section("subtitle","Home")

@section("tab_headers")
<ul>
  <li><a href="">Fidget button</a></li>
</ul>
<button type="button" onclick="toggleBtn()" id="btn"><span></span></button>
@stop

@section("content")
<h1 style="margin-left:100px">Aan allen die gekomen zijn proficiat ...</h1>
<p style="margin-left:100px">Aan allen die niet gekomen zijn, breng ze hiernaartoe</p>

<div class="row">
  <div class="column left">
    <div style="margin-left:100px; margin-top:50px;">
      <img style="border-radius: 20px;" src="https://www.dagvandejeugdbeweging.be/sites/default/files/styles/paragraph_1_2/public/2021-08/dvdjb_2021_poster_kleinweb.png?itok=EPJkI8oo" alt="Image" height="429" width="303">
    </div>
  </div>
  <div class="column right">
    <div class="text-container">
      <h1>Jeugdbeweging<br>on Web</h1>
      <p>
        Op deze website kan je allerhande nuttige informatie terugvinden rond Jeugdbeweging. Je kan themas ontdekken of toevoegen, activiteiten zoeken en op je kalender zetten, Kampterreinen zoeken en nog veel meer ...
      </p>
      <a href="/activiteit">Vind een activiteit</a>
      {{-- <div class="control">
        <p>04</p>
        <div class="line"><span></span></div>
        <p>05</p>
      </div> --}}
    </div>
  </div>
</div>
@stop