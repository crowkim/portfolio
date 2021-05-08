$(function () {
  var $intro01 = function () {
    var ohword = '[class^="ohword"]';
    var letter = '[class*="char"]';
    var letterWrapper = ".letter-wrapper";

    var $ow1 = $(".ohword-1");
    var $ow2 = $(".ohword-2");
    var $btn = $("button");

    var tl = new TimelineMax();

    // Lettering.js magic!
    // https://github.com/davatron5000/Lettering.js
    $(ohword).lettering();

    // Wrap each letter in a div
    $(letter).wrap('<div class="letter-wrapper" />');

    // Stagger letter animation
    tl.staggerFrom(
      $ow1.find(letterWrapper),
      0.2,
      {
        ease: Power4.easeOut,
        opacity: 0,
        x: "-100%",
      },
      0.05
    )
      .staggerFrom(
        $ow1.find(letter),
        0.6,
        {
          ease: Power4.easeOut,
          opacity: 0,
          x: "100%",
        },
        0.1
      )
      .staggerTo(
        $ow2,
        0.6,
        {
          ease: Power4.easeOut,
          opacity: 1,
          height: "100%",
        },
        0
      )
      .staggerFrom(
        $ow2.find(letterWrapper),
        0.2,
        {
          ease: Power4.easeOut,
          opacity: 0,
          x: "-100%",
        },
        0.05
      )
      .staggerFrom(
        $ow2.find(letter),
        0.6,
        {
          ease: Power4.easeOut,
          opacity: 0,
          x: "100%",
        },
        0.1
      )
      .staggerTo(
        $ow2.find(letterWrapper),
        0.6,
        {
          ease: Power4.easeOut,
        },
        0
      )
      .staggerTo(
        $btn,
        0.6,
        {
          ease: Power4.easeOut,
          opacity: 1,
        },
        0
      );
  };

  var $intro02 = function () {
    $("#intro, #home").animate({ top: "-100vh" }, "swing");
  };

  var $intro_show = function(){
    $.cookie("intro","true",{expires:-1,path:"/"});
  }

    if ($.cookie("intro") == "true") {
        $("#intro, #home").css('top',"-100vh");
    } 
    else {

        setTimeout($intro01, 500);
        setTimeout($intro02, 5500);
        setTimeout(function(){
          $('.nav').animate({top:'0vh'},'swing');
        }, 5500);
        $.cookie("intro","true",{expires:1,path:"/"});
    }

    $('.intro_show').click(function(){
        $.cookie("intro","false",{expires:1,path:"/"});
    })
});
