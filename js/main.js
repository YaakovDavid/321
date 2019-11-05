$(document).ready(function() {
console.log('here');

  $('.container').magnificPopup({
    delegate: 'a',
    type: 'iframe',
    closeBtnInside: false,
    closeOnContentClick: true,
    // tLoading: '', // remove text from preloader

  });


  // var viewport = $('.viewport'),
  //   frame = viewport.find('iframe'),
  //   frameRatio = 16 / 9;

  // $(window).on('resize', function () {
  //   var width = viewport.outerWidth(),
  //     height = viewport.outerHeight(),
  //     ratio = width / height,
  //     targetWidth = width,
  //     targetHeight = height;

  //   if (ratio > frameRatio) {
  //     // viewport is wider than video
  //     // correct the height
  //     targetHeight = width / frameRatio;
  //   } else {
  //     // viewport is taller than video
  //     // correct the width
  //     targetWidth = height * frameRatio;
  //   }

  //   frame.css({
  //     width: targetWidth,
  //     height: targetHeight -200
  //   });
  // }).trigger('resize');
})
