$(function () {
  // 메뉴버튼
  $(".btn").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("ham")) {
      $(".nav").stop().addClass("open");
      $(this).removeClass("ham").addClass("close");
    } else if ($(this).hasClass("close")) {
      $(".nav").stop().removeClass("open");
      $(this).removeClass("close").addClass("ham");
    }
  });

  // 내비
  $(".nav>ul>li").click(function () {
    var $taget_idx = $(this).index();
    var $target_scrollTop = $("section").eq($taget_idx).offset().top;
    console.log($target_scrollTop);
    $("html, body").animate({
        scrollTop: $target_scrollTop,
      },
      500,
      "swing"
    );
  });

  $(window).scroll(function () {
    var Wscroll01 = $(this).scrollTop();
    var Wscroll02 = $(this).scrollTop() + ($(window).height() * 2) / 10;
    var Wscroll03 = $(this).scrollTop() + ($(window).height() * 4) / 10;
    var Wscroll04 = $(this).scrollTop() + ($(window).height() * 6) / 10;
    var Wscroll05 = $(this).scrollTop() + ($(window).height() * 8) / 10;

    $("section").each(function () {
      var now_offset = $(this).offset().top;
      var now_index = $(this).index();

      // 우측상단 현재탭
      if (Wscroll01 >= now_offset) {
        $(".now>span").removeClass("active");
        $(".now>span")
          .eq(now_index - 1)
          .addClass("active");
        $("section")
          .eq(now_index - 1)
          .addClass("active");
      }

      // 패럴랙스 기본
      if (Wscroll02 >= now_offset) {
        $("section")
          .eq(now_index - 1)
          .addClass("active");
      } else {
        $("section")
          .eq(now_index - 1)
          .removeClass("active");
      }
    });

    // 프로필 사진 
    let x = 0,
      y = 0;
    mouseX = 0,
      mouseY = 0,
      $(window).mousemove(function (e) {
        x = e.pageX;
        y = e.pageY;
        let mouseX = x - $(window).width() / 2;
        let mouseY = y - $(".face").offset().top - $(".face").height() / 2;
        let angleX = Math.max(-8, Math.min(8, mouseX / 80));
        let angleY = -Math.max(-8, Math.min(8, mouseY / 80));

        $(".face>figure").css({
          "transform": "perspective(600px) rotateX(" + angleY + "deg) rotateY(" + angleX + "deg)"
        })
      })


    //패럴랙스 포트폴리오
    $(".portfolio>ul>li").each(function () {
      var now_offset = $(this).offset().top;
      var now_index = $(this).index();
      if (Wscroll04 >= now_offset) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }

      // 사진 스와이퍼
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 24,
        // Navigation arrows
        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
        },


      });


    });
  });
});
