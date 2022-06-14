new Swiper('.wrapper', {
   //Стрелки
   navigation: {
      nextEl: '.container__next-btn',
      prevEl: '.container__back-btn',
   },
   loop: true,
   slideToClickedSlide: false,
   autoHeight: false,
   slidesPerView: 2,
   watchOverflow: true,
   spaceBetween: 0,
   slidesPerGroup: 1,
   speed: 1000,
   direction: 'horizontal',
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,

   centeredSlides: true,
   initialSlide: 0,
   effect: 'creative',
   creativeEffect: {
      prev: {
         // will set `translateZ(-400px)` on previous slides
         translate: ['-100%', 0, 0],
      },
      next: {
         // will set `translateX(100%)` on next slides
         translate: ['100%', 0, 0],
      },
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      1090: {
         slidesPerView: 2,
      },
   }
});