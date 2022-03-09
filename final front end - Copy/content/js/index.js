$(document).ready(function(){
// $("#body").hide();
// $("body").css("background-color","white");
// $("#wel-div").show();
// $("#start-but").click(function(){
//     $("#body").show();
//     $("#wel-div").hide();
//     $("body").css("background-color","black");

// });  
$("#side-dishes").hide();
$("#drenks").hide();
$("#hide-s-d").click(function(){
    $("#side-dishes").hide();
    $("#drenks").hide();
    $("#main-dishes").show();
});
$("#hide-m-d").click(function(){
    $("#main-dishes").hide();
    $("#drenks").hide();
    $("#side-dishes").show();
});
$("#hide-m-s").click(function(){
    $("#side-dishes").hide();
    $("#main-dishes").hide();
    $("#drenks").show();
});
$("#div-hide-show").hide();
$("#hide").click(function(){
    $("#div-hide-show").hide();
});
$("#show").click(function(){
    $("#div-hide-show").show();
});
$("#hide").hide();
$("#show").click(function(){
    $("#hide").show();
    $("#show").hide();
});
$("#hide").click(function(){
    $("#show").show();
    $("#hide").hide();
});
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      
    },
    // mousewheel: true,
  });
});



