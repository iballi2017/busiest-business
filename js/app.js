$(document).ready(function(){
    $('.carousel').carousel({
        interval: 7000
      })

      
      const myLazyLoad = new LazyLoad({
        elements_selector: ".lazy-image"
   });
   myLazyLoad();
   
})