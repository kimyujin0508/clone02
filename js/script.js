$(function () {
  // header fixed
  var win = $(window);
  win.scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });

  // quick menu
  $(window).on("scroll", function () {
    var sct = $(window).scrollTop();
    if (sct < 300) {
      $(".gotop .btn").addClass("down");
      $(".gotop .btn").removeClass("top");
    } else {
      $(".gotop .btn").removeClass("down");
      $(".gotop .btn").addClass("top");
    }
  });

  $(".btn.to_top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
  $(".btn.to_down").click(function () {
    $("html,body").animate(
      { scrollTop: $("html").height() - $(window).height() },
      1000
    );
  });

  // 모바일 메뉴
  $(".mb-btn").click(function () {
    $(".mb-btn").toggleClass("active");
    $(".full-menu").toggleClass("active");
    $(".mb-menu-bg").fadeToggle();
    $(".header-bottom").toggleClass("active");
    $("body").toggleClass("active");
  });
  $(".mb-menu-bg").click(function () {
    $(".mb-btn").removeClass("active");
    $(".full-menu").removeClass("active");
    $(".mb-menu-bg").fadeOut();
    $(".header-bottom").removeClass("active");
    $("body").removeClass("active");
    mMainMenu.removeClass("active");
    mSubMenu.stop().slideUp();
  });
  $(".mb-menu-close").click(function () {
    $(".mb-btn").removeClass("active");
    $(".full-menu").removeClass("active");
    $(".mb-menu-bg").fadeOut();
    $(".header-bottom").removeClass("active");
    $("body").removeClass("active");
    mMainMenu.removeClass("active");
    mSubMenu.stop().slideUp();
  });

  // 모바일 서브 메뉴
  const mMenuLi = $(".mb-menu > ul > li");
  const mMainMenu = $(".mb-menu > ul > li > a");
  const mSubMenu = $(".mb-menu > ul > li > ul");

  $.each(mMenuLi, function (index, item) {
    let depth1 = $(this).find("a");
    depth1.click(function (e) {
      e.preventDefault;
      let temp = $(this).hasClass("active");
      if (temp) {
        $(this).removeClass("active");
        $(this).next().stop().slideUp();
      } else {
        mMainMenu.removeClass("active");
        mSubMenu.stop().slideUp();
        $(this).addClass("active");
        $(this).next().stop().slideDown();
      }
    });
  });
  $(window).resize(function () {
    if ($(window).width() < 1024) {
    } else {
      $(".mb-menu > ul").find("ul").show();
    }
  });

  // 서브메뉴
  const menueLi = $(".header-bottom nav>ul>li"),
    header = $("header");
  menueLi.mouseover(function () {
    header.addClass("on");
  }),
    menueLi.mouseout(function () {
      header.removeClass("on");
    });
  const langBtn = $(".lang");
  langBtn.click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  // $(".animation").each(function () {
  //   var otop = $(this).offset().top;
  //   var wtop = $(window).scrollTop() + $(window).height();
  //   if (wtop > otop) {
  //     $(this).addClass("con_aniload");
  //   } else {
  //     $(this).removeClass("con_aniload");
  //   }
  // });

  // slick-slide
  $(".bingggrae-slide").slick({
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: $(".binggrae .next"),
    prevArrow: $(".binggrae .prev"),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          rows: 2,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
    ],
  });
  $(".brand-slide").slick({
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: $(".brand_shop .next"),
    prevArrow: $(".brand_shop .prev"),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          rows: 2,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
    ],
  });

  AOS.init();
});
