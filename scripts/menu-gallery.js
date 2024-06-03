$(document).ready(function () {
  let modalOpen = false;

  $('.menu-gallery__slider').slick({
    centerMode: true,
    slidesToShow: 4,
    cssEase: 'linear',
    arrows: true,
    prevArrow: $('.custom-prev'),
    nextArrow: $('.custom-next'),
    initialSlide: 1,
    focusOnSelect: true
  });

  $('.menu-gallery__slider').slick('slickGoTo', 1);

  // open modal
  function openModal() {
    $('#coldAppetizersModal').css('display', 'block');
  }
  
  // close modal
  function closeModal() {
    $('#coldAppetizersModal').css('display', 'none');
    modalOpen = false;
  }

  // set all slides expect active opacity
  function reduceOpacity() {
    $('.slick-slide').not('.slick-current').css('opacity', '0.3');
  }

  // restore opacity from slide
  function restoreOpacity() {
    $('.slick-slide').css('opacity', '.8');
  }

  // open model by clicked button in slide
  $('.menu-gallery__slider').on('click', '.open-modal', function(){
    openModal();
  });

  // close model by clicked button in slide
  $('#coldAppetizersModal .close').on('click', function(){
    closeModal();
  });

  // track slide change
  $('.menu-gallery__slider').on('afterChange', function(event, slick, currentSlide) {
    if (modalOpen) {
      closeModal();
    }
    restoreOpacity();
    reduceOpacity();
  });

  // close modal by clicking beyond block
  $(window).on('click', function(event) {
    if ($(event.target).is('#coldAppetizersModal') && modalOpen) {
      closeModal();
    }
  });

  // slide click
  $('.menu-gallery__slider').on('click', '.slick-slide', function(){
    let index = $(this).data('slick-index');
    let currentSlide = $('.menu-gallery__slider').slick('slickCurrentSlide');
    if (index !== currentSlide) {
      $('.menu-gallery__slider').slick('slickGoTo', index);
    }
  });
});
