function toggle_visibility(id) {
  var e = document.getElementById(id);
  e.style.height = ((e.style.height != '210%') ? '210%' : '0%');
}


function toggle_h1(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'inline') ? 'inline' : 'none');
}


function toggle_h2_1(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'none') ? 'none' : 'inline');
}

function toggle_h2_2(id) {
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
    document.getElementById("stem-af").innerHTML = "Stem<span id='button2media'> voorgaande uitleningen</span> af";
  }
}

function toggle_sort(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'block') ? 'block' : 'none');
}



function toggle_style(id) {
  var e = document.getElementById(id);
  e.style.border = ((e.style.border != '1px solid black') ? '1px solid black' : 'none');
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

function book_individual(id) {
  var e = document.getElementById(id);
  e.style.visibility = ((e.style.visibility != 'hidden') ? 'hidden' : 'hidden');
}

function book_individual_gone(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'none') ? 'none' : 'none');
}



function toggle_individual(id) {
  var x = document.getElementById(id);
  x.style.opacity = ((x.style.opacity != '0.4') ? '0.4' : '1');
}









function menu(id) {
  var e = document.getElementById(id);
e.style.height = ((e.style.height != '50vh') ? '50vh' : '0vh');
e.style.width = ((e.style.width != '250px') ? '250px' : '0px');
e.style.top = ((e.style.top != '17.7%') ? '17.7%' : '13%');
e.style.left = ((e.style.left != '0%') ? '0%' : '1%');
}

function menu_gone(id) {
  var e = document.getElementById(id);
  e.style.height = ((e.style.height != '0vh') ? '0vh' : '0vh');
  e.style.width = ((e.style.width != '0px') ? '0px' : '0px');
  e.style.top = ((e.style.top != '13%') ? '13%' : '13%');
  e.style.left = ((e.style.left != '1%') ? '1%' : '1%');
}

function toggle_style_gone(id) {
  var e = document.getElementById(id);
  e.style.border = ((e.style.border != 'none') ? 'none' : 'none');
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
  x.style.marginLeft = ((x.style.marginLeft != '-90px') ? '-90px' : '-5px');
  x.style.marginTop = ((x.style.marginTop != '40px') ? '40px' : '-35px');
  x.style.transition = ((x.style.transition != '0.5s ease-in-out') ? '0.5s ease-in-out' : '0.5s ease-in-out');
  x.style.border = ((x.style.border != '0.5px solid black') ? '0.5px solid black' : 'none');
}