function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }


  $('.slidering').slick({
    centerMode: true,
    centerPadding: '60px',

    
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });


// Initi AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    once: true
  });
}



  