//Для проверки подключения файла
console.log("js is connect");

$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
    $(".header__top-inner").toggleClass("header__top-inner--active");
  });

  let mixer = mixitup(".portfolio__content", {
    animation: {
      enable: false,
    },
  });
  $(".slider-blog__inner").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow left"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow left"></button>',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false
          }
        }
      ],
  });
});
