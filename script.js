function toggle_visibility(id) {
  var e = document.getElementById(id);
  e.style.display = ((e.style.display != 'none') ? 'none' : 'flex');
}

function toggle_h1(id) {
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

function togglestyle(){
  var button = document.querySelector('#stem-af')
  var div = document.querySelector('#stem-af')
  
  button.addEventListener('click', function(){
    div.classList.toggle('button1-state2')
  })
  }

// function before(){
//     document.getElementById('book1')
//     .src="assets/Book1.jfif";
//     document.getElementsByClassName('book-name')
//     .innerHTML="All the bright places";
// }

// function afterr(){
//     document.getElementById('book1')
//     .src="assets/Book10.jfif";
//     document.getElementsByClassName('book-name')
//     .innerHTML="All the dark places";
// }

// function Buttontoggle()
// {
//   var t = document.getElementsByClassName("stem-af");
//   if(t.value=="YES"){
//       t.value="NO";}
//   else if(t.value=="NO"){
//       t.value="YES";}
// }

// var button = document.querySelector('.stem-af')
// var div = document.querySelector('.container-book-individual')

// button.addEventListener('click', function(){
//   div.classList.toggle('display-none')
// })

// let usersSection = document.querySelector(".container-books");
// let isshow = true;
// function showHideusers() {
//     if (isshow) {
//         usersSection.style.display = "none";
//         isshow = false;
//     } else{
//         usersSection.style.display = "block";
//         isshow = true;
//     }
// }


// var togglebutton = document.getElementById("togglebutton");
// var toggletarget = document.getElementById("toggletarget");
// togglebutton.addEventListener("click", toggledisplayfunction);
// function toggledisplayfunction(){
//     if(toggletarget.style.display == "block"){
//         toggletarget.style.display = "none";
//     } else {
//         toggletarget.style.display = "block";
//     }
// }

// const toggleDisplay = target => target.style.display =
//   (target.style.display == 'none') ?
//     'block' :
//     'none'

// let btn = document.querySelector('.stem-af');
// let div = document.querySelector('div')

// btn.addEventListener('click', () => {
//     if (div.style.display === 'none')
//         div.style.display = 'block'
// }else {
//     div.style.display = 'none'
// }
// )


// function toggleContent() {
//   var contentId = document.getElementById("content");
//   contentId.style.display == "block" ? contentId.style.display = "none" :
// contentId.style.display = "block";
// }



// var clicked = false;
// function toggle_h1() {
//   if(!clicked){
//     clicked = true;
//     document.getElementById("h-1").innerHTML = "Aanbevelingen afstemmen";
//   }else{
//     clicked = false;
//     document.getElementById("h-1").innerHTML = "Aanbevelingen.";
//   }
// }

// function h1changes(){
//   document.getElementById("h-1").innerHTML = "Aanbevelingen afstemmen";
// }


