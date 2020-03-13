$(document).ready(function () {
  $('.carousel').carousel({
    interval: 7000
  })


  const myLazyLoad = new LazyLoad({
    elements_selector: ".lazy-image"
  });
  myLazyLoad();


})


/* .......Page loader.......*/
$(window).on("load", function () {
  $(".preload").hide("slow")
  // $(".preload").addClass("preload-finish")    //this works as well
})

/* .......youtube video loader.......*/
$(".youtube-vid").on("load", function () {
  $(".preload-video").hide("slow")
})

// section scroll animation library
AOS.init({
  duration: 1200,
})