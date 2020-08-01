var mySwiper = new Swiper('.swiper-container', {
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      setWrapperSize:true,
      loop: true, 
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  
