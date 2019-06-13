imagesArray = [
  'images/01.jpg',
  'images/02.jpg',
  'images/03.jpg',
  'images/04.jpg',
  'images/05.jpg',
  'images/06.jpg',
  'images/07.jpg',
  'images/08.jpg',
  'images/09.jpg',
  'images/10.jpg',
  'images/11.jpg',
  'images/12.jpg',
  'images/13.jpg',
  'images/14.jpg',
  'images/15.jpg',
  'images/16.jpg',
  'images/17.jpg',
  'images/18.jpg',
  'images/19.jpg',
  'images/20.jpg',
  'images/21.jpg',
  'images/22.jpg',
  'images/23.jpg',
  'images/24.jpg',
  'images/25.jpg',
  'images/26.jpg',
  'images/27.jpg',
  'images/28.jpg',
  'images/29.jpg',
  'images/30.jpg',
]


function imageHover(index) {
  if (window.innerWidth > 900) {
  document.body.style.backgroundImage = `url(${imagesArray[index]})`;
  document.body.style.backgroundColor = "#000";
  document.getElementById(`date-${index}`).style.color = "#FFFFFF";

  document.getElementById(`event-name-${index}`).style.color = "#FFFFFF";

  // document.getElementById(`event-name-${index}`).style.backgroundColor = "#000";


  document.getElementById(`event-name-${index}`).style.color = "#FFFFFF";

  document.getElementById(`manicule-${index}`).style.color = "#FFFFFF";

  document.getElementById(`article-ticket-${index}`).style.color = "#FFFFFF";
  document.getElementById('logo').style.color = "#FFFFFF";
  // console.log(imagesArray[index]);
}
}


// background-color: #fff2ac;


function imageReset(index) {
  if (window.innerWidth > 900) {
  document.body.style.backgroundImage = "";
  document.body.style.backgroundColor = "";
  document.getElementById(`date-${index}`).style.color = "";
  document.getElementById(`event-name-${index}`).style.color = "";
  document.getElementById(`event-name-${index}`).style.backgroundColor = "";


  document.getElementById(`manicule-${index}`).style.color = "";
  document.getElementById(`article-ticket-${index}`).style.color = "";
  document.getElementById('logo').style.color = "";
}
}
