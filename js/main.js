var img2 = document.querySelectorAll(".image2 > img");
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var current = 0;
image2(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;
function image2(n) {
  for(var i = 0; i < img2.length; i++) {
    img2[i].style.display = "none"; 
  }
  img2[n].style.display = "block"; 
}
function prevSlide() {
  if(current > 0) current -= 1; 
  else current = img2.length - 1;
    image2(current);
}
function nextSlide() {
  if(current < img2.length - 1) current += 1; 
  else current = 0;
    image2(current);
}