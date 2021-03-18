$(document).ready(function(){
    
    //sliders
    $('.sliderkla').slick({
      prevArrow: false,
      nextArrow: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
            slidesToShow: 1
            }

          }
      ]
    });
  

    
 //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("cat_tab");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
  });
}
    
});


