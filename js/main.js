var current = 0;
image2();

function image2() {
  var img2 = document.querySelectorAll(".image2 > img");
  for(let i = 0; i < img2.length; i++) {
    img2[i].style.display = "none";
  }
  current++;
  if(current > img2.length)
    current = 1;
  img2[current - 1].style.display = "block";
  setTimeout(image2, 2000);
} 