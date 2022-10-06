function toggle_visibility(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'none') ? 'none' : 'flex');
}


function toggle_h1(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'inline') ? 'inline' : 'none');
}


function toggle_h5_1(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'none') ? 'none' : 'inline');
}

function toggle_h5_2(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'inline') ? 'inline' : 'none');
}


var clicked = false;
function toggle_text() {
  if (!clicked) {
    clicked = true;
    document.getElementById("stem-af").innerHTML = "Bekijk aanbevelingen";
  } else {
    clicked = false;
    document.getElementById("stem-af").innerHTML = "Stem voorgaande uitleningen af";
  }
}


function toggle_style(id) {
  var e = document.getElementById(id);
  e.style.color = ((e.style.color != 'var(--clr-black)') ? 'var(--clr-black)' : 'var(--clr-white)');
  e.style.backgroundColor = ((e.style.backgroundColor != 'var(--clr-container-books)') ? 'var(--clr-container-books)' : 'var(--clr-black)');
}


function toggle_thumbs_up_2comes(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'block') ? 'block' : 'none');
}

function toggle_thumbs_up_1goes(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
}

function toggle_thumbs_up_1comes(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'block') ? 'block' : 'none');
}

function toggle_thumbs_up_2goes(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
}


function toggle_thumbs_down_2comes(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'block') ? 'block' : 'none');
}

function toggle_thumbs_down_1goes(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
}

function toggle_thumbs_down_1comes(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'block') ? 'block' : 'none');
}

function toggle_thumbs_down_2goes(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
}


function toggle_opacity1_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.3') ? '0.3' : '1');
}

function toggle_opacity1_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.3') ? '0.3' : '1');
  e.style.pointerEvents = ((e.style.pointerEvents != 'none') ? 'none' : 'auto');
}

function toggle_opacity1_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.3') ? '0.3' : '1');
}

function toggle_opacity1_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.3') ? '0.3' : '1');
}


function book_individual(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'none') ? 'none' : 'flex');
}


function menu(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'block') ? 'block' : 'none');
}

function opacity_for_menu(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'block') ? 'block' : 'none');
}

function menu_gone(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'none') ? 'none' : 'none');
}

function opacity_for_menu_gone(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'none') ? 'none' : 'none');
}

function toggle_style_gone(id) {
  var e = document.getElementById(id);
  e.style.color = ((e.style.color != 'var(--clr-white)') ? 'var(--clr-white)' : 'var(--clr-white)');
  e.style.backgroundColor = ((e.style.backgroundColor != 'var(--clr-black)') ? 'var(--clr-black)' : 'var(--clr-black)');
}


function toggle_list(id) {
  var x = document.getElementById(id);
  if (x.innerHTML === "playlist_remove") {
    x.innerHTML = "format_list_bulleted";
  } else {
    x.innerHTML = "playlist_remove";
  }
  x.style.color = ((x.style.color != 'var(--clr-red)') ? 'var(--clr-red)' : 'var(--clr-black)');
  x.style.fontSize = ((x.style.fontSize != '270%') ? '270%' : '200%');
  x.style.bottom = ((x.style.bottom != '20%') ? '20%' : '0%');
}


function menu_hide_show(id) {
  var e = document.getElementById(id);
  e.style.width = ((e.style.width != '0px') ? '0px' : '900px');
  e.style.transition = ((e.style.transition != '0.5s ease-in-out') ? '0.5s ease-in-out' : '0.5s ease-in-out');
  e.style.pointerEvents = ((e.style.pointerEvents != 'none') ? 'none' : 'auto');
}

function toggle_sidebar_button(id) {
  var x = document.getElementById(id);
  if (x.innerHTML === "Show menu") {
    x.innerHTML = "Hide menu";
  } else {
    x.innerHTML = "Show menu";
  }
  x.style.transform = ((x.style.transform != 'rotate(-90deg)') ? 'rotate(-90deg)' : 'rotate(0deg)');
  x.style.left = ((x.style.left != '-45px') ? '-45px' : '2%');
  x.style.top = ((x.style.top != '5vh') ? '5vh' : '-2%');
  x.style.transition = ((x.style.transition != '0.5s ease-in-out') ? '0.5s ease-in-out' : '0.5s ease-in-out');
  x.style.color = ((x.style.color != 'var(--clr-black)') ? 'var(--clr-black)' : 'var(--clr-white)');
  x.style.backgroundColor = ((x.style.backgroundColor != 'var(--clr-container-books)') ? 'var(--clr-container-books)' : 'var(--clr-black)');
}