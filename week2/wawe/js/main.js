console.log('js is connect');
$(function() {
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