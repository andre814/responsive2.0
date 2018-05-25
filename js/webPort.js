// var $item = $('.carousel-item'); 
// var $wHeight = $(window).height();
// $item.eq(0).addClass('active');
// $item.height($wHeight); 
// $item.addClass('full-screen');

// $('.carousel img').each(function() {
//   var $src = $(this).attr('src');
//   var $color = $(this).attr('data-color');
//   $(this).parent().css({
//     'background-image' : 'url(' + $src + ')',
//     'background-color' : $color
//   });
//   $(this).remove();
// });

// $(window).on('resize', function (){
//   $wHeight = $(window).height();
//   $item.height($wHeight);
// });

// $('.carousel').carousel({
//   interval: 10000,
//   pause: "false"
// });


// $(document).ready(function(){ 
//     $('#characterLeft').text('140 characters left');
//     $('#message').keydown(function () {
//         var max = 140;
//         var len = $(this).val().length;
//         if (len >= max) {
//             $('#characterLeft').text('You have reached the limit');
//             $('#characterLeft').addClass('red');
//             $('#btnSubmit').addClass('disabled');            
//         } 
//         else {
//             var ch = max - len;
//             $('#characterLeft').text(ch + ' characters left');
//             $('#btnSubmit').removeClass('disabled');
//             $('#characterLeft').removeClass('red');            
//         }
//     });    
// });












$(document).ready(function(){



    $("#insta")
        .mouseover(function() { 
            var src = "images/instaHover.png";
            $("#insta").attr("src", src);
        })
        .mouseout(function() {
            var src = "images/instaDark.png";
            $("#insta").attr("src", src);
        });


    $("#facebook")
        .mouseover(function() { 
            var src = "images/facebookHover.png";
            $("#facebook").attr("src", src);
        })
        .mouseout(function() {
            var src = "images/facebookDark.png";
            $("#facebook").attr("src", src);
        });

    $("#linkedIn")
        .mouseover(function() { 
            var src = "images/linkedInHover.png";
            $("#linkedIn").attr("src", src);
        })
        .mouseout(function() {
            var src = "images/linkedInDark.png";
            $("#linkedIn").attr("src", src);
        });


    var logoColors = ["images/logoRed.png", "images/logoYellow.png", "images/logoLightBlue.png", "images/logoDarkBlue.png", "images/logoGreen.png"]

    var x = Math.floor(Math.random()*logoColors.length);

    $("#logo").css({"background-image":"url("+logoColors[x]+")"});




    $( '#hamburger' ).click(function(){
        $('#navOptions').toggleClass("hidden");
        $('#navOptions').toggleClass("responsiveNav");
    });











});