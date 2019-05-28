

if ($(window).width() < 600) {
   
}
else {
  $(document).on("scroll", function () {

    var pixels = $(document).scrollTop()

    $(".side-scroll").css("left", -1 * pixels)

    // console.log(pixels);
  })

}
