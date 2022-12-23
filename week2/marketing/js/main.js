//Для проверки подключения файла
console.log('js is connect');

$(function() {
  let mixer = mixitup('.portfolio__content', {
    animation: {
      enable: false
    }
  })
  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow left"></button>',
  })
})