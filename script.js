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
  e.style.color = ((e.style.color != 'black') ? 'black' : 'white');
  e.style.backgroundColor = ((e.style.backgroundColor != 'rgb(220, 220, 220)') ? 'rgb(220, 220, 220)' : 'black');
  e.style.border = ((e.style.border != 'solid black 2px') ? 'solid black 2px' : '0px');
  e.style.lineHeight = ((e.style.lineHeight != '28px') ? '28px' : '28px');
}

function toggle_other_button(id) {
  var e = document.getElementById(id);
  e.style.left = ((e.style.left != '225px') ? '225px' : '300px');
}










// var button = document.querySelector('#cancel-suggestion')
// var containers = document.querySelector('.opacity')

// button.addEventListener('click', function(){
//   containers.classList.toggle('opacity-less')
// })

// const element = document.querySelector("#stem-af")
// let taskDone = false

// const elementShow = () => {
//   element.innerHTML = `
//     <button id="stem-af" style="background-color : ${!taskDone 
//       ? "#4dd432" : "#fd67ad"};" onclick=doneTask()>
//       ${!taskDone ? "Done" : "not done yet"}
//     </button>
//     `
// }
// elementShow()

// // click Done button
// const doneTask = () => {
//   taskDone = (taskDone ? false : true)
//   elementShow()
// }


// $( "#stem-af" ).click(function() {
//   $( "#stem-af" ).css('background', 'green');
// });


// function changeColor() {
//   document.getElementById("stem-af").style.background='rgb(220, 220, 220)';
//   document.getElementById("stem-af").style.color='black';
//   document.getElementById("stem-af").style.border='solid 2.5px black';
//   document.getElementById("stem-af").style.lineHeight='27px';
// }




// $('.box').on('click', function(e){
//   e.preventDefault();
//   $(this).toggleClass('button1-state2');
// });




// const btn = document.getElementById('stem-af');

// let index = 0;

// const colors = ['salmon', 'green', 'blue', 'purple'];

// btn.addEventListener('click', function onClick() {
//   btn.style.backgroundColor = colors[index];
//   btn.style.color = 'white';

//   index = index >= colors.length - 1 ? 0 : index + 1;
// });

// function togglestyle(){
//   var button = document.querySelector('#stem-af')
//   var div = document.querySelector('#stem-af')
  
//   button.addEventListener('click', function(){
//     div.classList.toggle('button1-state2')
//   })
//   }

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





function toggle_opacity1_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity1_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity1_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity1_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity2_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity2_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity2_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity2_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity3_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity3_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity3_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity3_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity4_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity4_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity4_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity4_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity5_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity5_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity5_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity5_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity6_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity6_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity6_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity6_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity7_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity7_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity7_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity7_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity8_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity8_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity8_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity8_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity9_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity9_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity9_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity9_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity10_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity10_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity10_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity10_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity11_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity11_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity11_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity11_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity12_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity12_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity12_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity12_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity13_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity13_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity13_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity13_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity14_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity14_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity14_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity14_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity15_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity15_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity15_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity15_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity16_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity16_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity16_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity16_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity17_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity17_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity17_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity17_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}


function toggle_opacity18_1(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity18_2(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity18_3(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}

function toggle_opacity18_4(id) {
  var e = document.getElementById(id);
  e.style.opacity = ((e.style.opacity != '0.5') ? '0.5' : '1');
}