
// START OF CURSOR //
//cursor variables 
const cursor = document.querySelector('.cursor');
const cursorinner = document.querySelector('.cursor2');
//quieries all links within the document 
const a = document.querySelectorAll('a');

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



// START OF MENU OVERLAY //


function scrollAppear(){
  var introText = document.querySelector('.about-me');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight > 500;


  if(introPosition < screenPosition){
    introText.classList.add('about-appear');
  }
}

window.addEventListener('scroll',scrollAppear);