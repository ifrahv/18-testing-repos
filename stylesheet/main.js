
// START OF CURSOR //
'use strict';
//cursor variables 
const cursor = document.querySelector('.cursor');
const cursorinner = document.querySelector('.cursor2');
const a = document.querySelectorAll('a'); //queries all links within the document 

//these two functions allows the circles to follow the cursor
document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

//when the cursor is clicked the hover is added
document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

//when the cursor is clicked the hover is removed
document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

//this checks to change the color of hover
a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
// END OF CURSOR //


// START OF header  //
window.addEventListener('scroll', function (){
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 400);
});



// START OF PORTFOLIO TEXT FADE IN //
window.onload = function(){
  const EFFECT = document.querySelector(".portfolio-title");

  window.addEventListener('scroll', scrollEffect);

  function scrollEffect () {
    if(window.scrollY>500) {
      EFFECT.style.opacity = '1';
      EFFECT.style.transform = 'translateY(-20px)';
      EFFECT.style.transition = '1s ease-in-out';

    } else{
      EFFECT.style.opacity = '0';
      EFFECT.style.transform = 'translateY(0px)';
    }
  }

}



// START OF about me fade in //

function scrollAppear(){
  var introText = document.querySelector('.about-me');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 3;


  if(introPosition < screenPosition){
    introText.classList.add('about-appear');
  }else{
    introText.classList.remove('about-appear');
  }
}

window.addEventListener('scroll',scrollAppear);



// background overlay  and scroll to top//


function bgChanger (){
  if(this.scrollY > this.innerHeight / 2){
    document.body.classList.add('bg-active');
  }else{
    document.body.classList.remove('bg-active');
  }
}

window.addEventListener("scroll", bgChanger);




// page loader //

const preloader = document.querySelector('.preloader');//selecting the class
function sayHi() {
preloader.style.opacity = '0' ;
}
function disappear() {
  preloader.style.zIndex = '-1' ;
  }
setTimeout(sayHi, 5000); // this function is activated after 9000 milliseconds
setTimeout(disappear, 6000);



//text distortion

const text = baffle(".data");
text.set({
  character : '/░█ ▓/█▒█ ░▒<░░ █░█ █░▓░▒ ▓███ ▓>░ ▓▒▒/ █▓░▒',
  speed: 100,
});
text.start();
text.reveal(9000);




// Mobile navigation //

const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const menuText = document.querySelector('.menu-on');

menuIcon.addEventListener('click', () => {
navbar.classList.toggle('change');
});






