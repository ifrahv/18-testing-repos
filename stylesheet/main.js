
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

//this allows the color to change when hovering over a link
a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})