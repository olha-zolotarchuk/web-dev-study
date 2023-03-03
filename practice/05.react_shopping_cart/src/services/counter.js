$(document).ready(function () {
  //create variable
  var counts = 0;
  $(".addtocart").click(function () {
  
    counts += +1;
    $(".cart-counter").animate(
      {
        //show span with number
        opacity: 1,
      },
      300,
      function () {
        //write number of counts into span
        $(this).text(counts);
      }
    );
  });
});
