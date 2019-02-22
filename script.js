imagesArray = [
  'images/01.png',
  'images/02.png',
  'images/03.png'
]

function imageHover(index) {
  document.body.style.backgroundImage = `url(${imagesArray[index]})`;
  document.getElementById(`date-${index}`).style.color = "#FFFFFF";
  document.getElementById(`event-name-${index}`).style.color = "#FFFFFF";
  document.getElementById(`manicule-${index}`).style.color = "#FFFFFF";
  document.getElementById(`article-ticket-${index}`).style.color = "#FFFFFF";
  document.getElementById('logo').style.color = "#FFFFFF";
  // console.log(imagesArray[index]);
}

function imageReset(index) {
  document.body.style.backgroundImage = "";
  document.getElementById(`date-${index}`).style.color = "";
  document.getElementById(`event-name-${index}`).style.color = "";
  document.getElementById(`manicule-${index}`).style.color = "";
  document.getElementById(`article-ticket-${index}`).style.color = "";
  document.getElementById('logo').style.color = "";
}
