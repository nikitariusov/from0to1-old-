console.log('js is connect');
$(function() {

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  })

  let mixer = mixitup('.gallery__content', {
    animation: {
      enable: false
    }
  })

  $('.blog__slider').slick({
    arrows: false,
    dots: true,
  })
})