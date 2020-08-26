//jshint esversion:6

// Navbar
  $(".hamburger-btn").click(function(){
    $(".close-btn").show();
    $(".hamburger-btn").hide();
    $(".nav-menu").slideToggle("slide");
  });

  $(".close-btn").click(function(){
    $(".hamburger-btn").show();
    $(".close-btn").hide();
    $(".nav-menu").slideToggle("slide");
  });

//Card flip click

const flipCardContainerOne = document.querySelectorAll(".flip-card-container")[0];
flipCardContainerOne.addEventListener("click", function(){
  flipCardContainerOne.classList.toggle("flip");
});

const flipCardContainerTwo = document.querySelectorAll(".flip-card-container")[1];
flipCardContainerTwo.addEventListener("click", function(){
  flipCardContainerTwo.classList.toggle("flip");
});


const flipCardContainerThree = document.querySelectorAll(".flip-card-container")[2];
flipCardContainerThree.addEventListener("click", function(){
  flipCardContainerThree.classList.toggle("flip");
});

const flipCardContainerFour = document.querySelectorAll(".flip-card-container")[3];
flipCardContainerFour.addEventListener("click", function(){
  flipCardContainerFour.classList.toggle("flip");
});
