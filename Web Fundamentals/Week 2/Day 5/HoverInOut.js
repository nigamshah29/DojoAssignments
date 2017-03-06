$(document).ready(function(){

// $('img').click(function() {
//   $(this).attr("src", $(this).data("alt-src"));
//   });

//   $("img").click(function() {
//       var _this = $(this);
//       var current = _this.attr("src");
//       var swap = _this.attr("data-alt-src");
//      _this.attr('src', swap).attr("data-alt-src",current);
// });

  // $('img').click(function() {
  //   var current = $(this).attr("src");
  //   var swap = $(this).attr("data-alt-src");
  //   $(this).attr('src', swap).attr('data-alt-src', current);
  // });

  $('img').hover(function() {
    var current = $(this).attr("src");
    var swap = $(this).attr("data-alt-src");
    $(this).attr('src', swap).attr('data-alt-src', current);
  },
    function(){
    $(this).attr('src', current).attr('data-alt-src', swap);
    }
  );



});
