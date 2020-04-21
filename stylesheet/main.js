// customized cursor (inspired by https://tympanus.net/codrops/2019/01/31/custom-cursor-effects/) //

// cursor variables 
const cursor = document.querySelector('.cursor');
const cursorinner = document.querySelector('.cursor2');
const a = document.querySelectorAll('a'); //queries all links within the document.

// these two functions allows the circles to follow the cursor.
document.addEventListener('mousemove', function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

document.addEventListener('mousemove', function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

// when the cursor is clicked the hover is added.
document.addEventListener('mousedown', function () {
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

// when the cursor is clicked the hover is removed.
document.addEventListener('mouseup', function () {
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

// this checks the links to see if it needs to change the color of hover.
a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

// end of customized cursor (inspired by https://tympanus.net/codrops/2019/01/31/custom-cursor-effects/) //




// Header colour change (inspired by https://codepen.io/codeandfly/pen/xbQVOR) //

window.addEventListener('scroll', function () { 
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 400);
});

// End of Header colour change (inspired by https://codepen.io/codeandfly/pen/xbQVOR) //



// portfolio text fade in effect 
window.onload = function () {
  const EFFECT = document.querySelector(".portfolio-title");

  window.addEventListener('scroll', scrollEffect);

  function scrollEffect() {
    if (window.scrollY > 500) {
      EFFECT.style.opacity = '1';
      EFFECT.style.transform = 'translateY(-50px)';
      EFFECT.style.transition = '1s ease-in-out';

    } else {
      EFFECT.style.opacity = '0';
      EFFECT.style.transform = 'translateY(0px)';
    }
  }

}



// about me fade in effect 
function scrollAppear() {
  var introText = document.querySelector('.about-me');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2.5;


  if (introPosition < screenPosition) {
    introText.classList.add('about-appear');
    introText.style.transform = 'translateY(-50px)';
    introText.style.transition = '1s ease-in-out';
  } else {
    introText.classList.remove('about-appear');
  }
}

window.addEventListener('scroll', scrollAppear);



// background overlay 
function bgChanger() {
  if (this.scrollY > this.innerHeight / 2) {
    document.body.classList.add('bg-active');
  } else {
    document.body.classList.remove('bg-active');
  }
}

window.addEventListener("scroll", bgChanger);


//text distortion
const text = baffle(".data");
text.set({
  character: '/░█ ▓/█▒█ ░▒<░░ █░█ █░▓░▒ ▓███ ▓>░ ▓▒▒/ █▓░▒',
  speed: 100,
});
text.start();
text.reveal(9000);




// Mobile navigation (inspired by https://codepen.io/riogrande/pen/gbXxdx) //
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const menuLink = document.querySelector('.nav-link');
//when the hamburger is clicked, menu opens
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});
//when a link is clicked, menu closes
a.forEach(item => {
  item.addEventListener('mousedown', () => {
    cursor.classList.add('click');
    navbar.classList.remove('change');
  });
})





//animations for home page load in
TweenMax.to(".preloader", 2.2, {
  delay: 3.8,
  top: "-100%",
  ease: Expo.easeInOut
});

TweenMax.from(".logo", 2, {
  delay: 5.2,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".text-highlight", 2, {
  delay: 5.1,
  y: 60,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".ifrah1", 2, {
  delay: 5.3,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".hometext", 2, {
  delay: 5.3,
  y: 60,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media i", 2, {
  delay: 5.9,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
}, 0.2);

TweenMax.from(".svg-wrapper", 2, {
  delay: 5.8,
  x: 60,
  opacity: 0,
  ease: Expo.easeInOut
});





