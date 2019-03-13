imagesArray = [
  'images/01.png',
  'images/02.png',
  'images/03.png',
  'images/04.png',
  'images/05.png',
  'images/06.png',
  'images/07.png',
  'images/08.png',
  'images/09.png',
  'images/10.png',
  'images/11.png',
]

function imageHover(index) {
  if (window.innerWidth > 900) {
  document.body.style.backgroundImage = `url(${imagesArray[index]})`;
  document.body.style.backgroundColor = "#000";
  document.getElementById(`date-${index}`).style.color = "#FFFFFF";
  document.getElementById(`event-name-${index}`).style.color = "#FFFFFF";
  document.getElementById(`manicule-${index}`).style.color = "#FFFFFF";
  document.getElementById(`article-ticket-${index}`).style.color = "#FFFFFF";
  document.getElementById('logo').style.color = "#FFFFFF";
  // console.log(imagesArray[index]);
}
}

function imageReset(index) {
  if (window.innerWidth > 900) {
  document.body.style.backgroundImage = "";
  document.body.style.backgroundColor = "";
  document.getElementById(`date-${index}`).style.color = "";
  document.getElementById(`event-name-${index}`).style.color = "";
  document.getElementById(`manicule-${index}`).style.color = "";
  document.getElementById(`article-ticket-${index}`).style.color = "";
  document.getElementById('logo').style.color = "";
}
}
