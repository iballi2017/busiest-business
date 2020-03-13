

/* .......Page loader.......*/
$(window).on("load", function () {
    $(".preload").hide("slow")
    // $(".preload").addClass("preload-finish")    //this works as well
  })
  
  /* .......youtube video loader.......*/
  $(".youtube-vid").on("load", function () {
    $(".preload-video").hide("slow")
  })
  
  /*
  // This block works for page loader as well
  
    window.addEventListener("load", () => {
    const preload = document.querySelector(".preload")
    preload.classList.add("preload-finish")
  })
  */
  