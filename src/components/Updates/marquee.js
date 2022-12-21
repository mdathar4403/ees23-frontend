// import $ from "jquery"

// $(document).ready(function() {
//     var i = 0;
//     $(".update-in-list").each(function() {
//           var $this = $(this);
//           $this.css("top", i);
//           i += 200;
//           doScroll($this);
//     });
// });

//     function doScroll($ele) {
//         var top = parseInt($ele.css("top"));
//         if(top < -60) {
//             top = "100%";
//             $ele.css("top", top);
//         }
//         $ele.animate({ top: -100 },4000,'linear', function() {doScroll($(this))});
//     }