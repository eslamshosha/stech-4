let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function (e) {
      e.preventDefault();

      $(".navgition").toggleClass("reset-left");
      $("body").toggleClass("overflow");
      $(".menu-bars").toggleClass("open-bars");
    });
  }

  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
  });
  // for counter //
  const sectionExists =
    document.getElementsByClassName("counter-cont").length > 0;

  if (sectionExists) {
    var a = 0;
    function countFunction() {
      $(".counter-num").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2000,
            easing: "swing",
            step: function () {
              if (this.countNum < 10) {
                $this.text("0" + Math.floor(this.countNum));
              } else {
                $this.text(Math.floor(this.countNum));
              }
            },
            complete: function () {
              if (this.countNum < 10) {
                $this.text("0" + this.countNum);
              } else {
                $this.text(this.countNum);
              }
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
    if ($(window).width() <= 767) {
      window.onload(countFunction());
    }
    $(window).scroll(function () {
      var oTop = $(".counter-cont").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        countFunction();
      }
    });
    var oTop = $(".counter-cont").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      countFunction();
    }
  } else {
  }

  // end counter //
  ///////// ** customer-section** /////////
  var customer = new Swiper(".customer-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".customer-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".customer-slider .swiper-btn-next",
      prevEl: ".customer-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 5,
      },
      1199: {
        slidesPerView: 6,
      },
    },
  });
  ///////// ** partner-section** /////////
  var partner = new Swiper(".partner-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".partner-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".partner-slider .swiper-btn-next",
      prevEl: ".partner-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 5,
      },
      1199: {
        slidesPerView: 6,
      },
    },
  });
  const classExists =
    document.getElementsByClassName("new-address-select").length > 0;

  if (classExists) {
    $(".new-address-select").select2();
  } else {
  }

  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  //////////** scroll to section **//////////
  $(document).on("scroll", onScroll);
  $('.big-menu a[data-href^="#"]').on("click", function (e) {

    $(".navgition").removeClass("reset-left");
    $(".menu-bars").removeClass("open-bars");

    $("body").removeClass("overflow");
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = $(this).attr("data-href");
    menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - 70,
        },
        500,
        "swing",
        function () {
          $(document).on("scroll", onScroll);
        }
      );
  });
  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.header a[data-href^="#"]').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("data-href"));
      var refoffset = $(currLink.attr("data-href")).position().top - 80;
      if (
        refoffset <= scrollPos &&
        refoffset + refElement.height() + 240 > scrollPos
      ) {
        $(".header .nav-item>a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
});

mixitup;
var mixer = mixitup(".container");
var containerEl = document.querySelector("#mix-container");

var mixer = mixitup(containerEl, {
  animation: {
    effects: "fade scale(0.5)",
  },
});
