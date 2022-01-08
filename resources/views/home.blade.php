@extends("master")
@section("subtitle","Home")

@section("tab_headers")
<ul>
  <li><a href="">Subheader 1</a></li>
  <li><a href="">Subheader 2</a></li>
</ul>
<button type="button" onclick="toggleBtn()" id="btn"><span></span></button>
@stop

@section("content")
<h1 style="margin-left:50px">This is the home page</h1>

<div class="text-container">
  <h1>Jeugdbeweging<br>on Web</h1>
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
@stop