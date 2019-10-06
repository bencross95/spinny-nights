imagesArray = [
  'images/nightImages/01.jpg',
  'images/nightImages/02.jpg',
  'images/nightImages/03.jpg',
  'images/nightImages/04.jpg',
  'images/nightImages/05.jpg',
  'images/nightImages/06.jpg',
  'images/nightImages/07.jpg',
  'images/nightImages/08.jpg',
  'images/nightImages/09.jpg',
  'images/nightImages/10.jpg',
  'images/nightImages/11.jpg',
  'images/nightImages/12.jpg',
  'images/nightImages/13.jpg',
  'images/nightImages/14.jpg',
  'images/nightImages/15.jpg',
  'images/nightImages/16.jpg',
  'images/nightImages/17.jpg',
  'images/nightImages/18.jpg',
  'images/nightImages/19.jpg',
  'images/nightImages/20.jpg',
  'images/nightImages/21.jpg',
  'images/nightImages/22.jpg',
  // 'images/nightImages/23.jpg',
  // 'images/nightImages/24.jpg',
  // 'images/nightImages/25.jpg',
  // 'images/nightImages/26.jpg',
  // 'images/nightImages/27.jpg',
  // 'images/nightImages/28.jpg',
  // 'images/nightImages/29.jpg',
  // 'images/nightImages/30.jpg',
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
