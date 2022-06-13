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

/* 라디오버튼 클릭시
var menuBox = document.getElementsByClassName("menu");
var topRadioMenu = document.getElementsByName("topmenu");
var menu1 = document.getElementsByClassName("menu1");
var menu2 = document.getElementsByClassName("menu2");
var menu3 = document.getElementsByClassName("menu3");

for(i = 0; i < topRadioMenu.length; i++) {
  topRadioMenu[i].addEventListener('click', function() {
    switch(topRadioMenu[i].id) {
      case "tr1":
        menu1.style.display = 'block';
        menu2.style.display = 'none';
        menu3.style.display = 'none';
        break;
       case "tr2":
        menu1.style.display = 'none';
        menu2.style.display = 'block';
        menu3.style.display = 'none';
        break;
      case "tr3":
        menu1.style.display = 'none';
        menu2.style.display = 'none';
        menu3.style.display = 'block';
        break;
    }
  });
}
*/