// hide()
// show()
// toggle()
// slideUp()
// slideDown()
// slideToggle()
// animate({"":""},  )
// fadeIn()
// fadeOut()
// fadeToggle()
// fadeTo( , )

// $("button").click(function(){let ali = $(".prog").innerWidth();
//   if (ali<400)
//   $(".prog").animate({"width":"+=100"},100)

// });
// $("button").click(function () {
//   $(".lol").fadeTo(600 ,.3)

// });
$("button").click(function(){
$(".box").animate({ width: "100%" }, 1000);
$(".box").animate({ height: "100%" }, 1000, function () {
  $("h2").fadeIn(500, function () {
    $(".item").eq(0).slideDown(500,function(){
      $(".item").eq(1).slideDown(500,function(){
        $(".item").eq(2).slideDown(500)
      });
    });
  });
});})
// $("button").click(function(){
//   $(".box").animate({ width: "100%" }, 1000);
//   $(".box").animate({ height: "100vh" }, 1000, function () {
//     $("h2").fadeIn(500, function () {
//       $(".item").slideDown(500)
//         });
//       });
//     });
 
