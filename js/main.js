document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
  const menu = document.querySelector('.menu')

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
      menu.classList.toggle('active')
      mobileMenuToggle.classList.toggle('active')
    })
  }

  // Initialize Swiper
  if (document.querySelector('.community-slider')) {
    const swiper = new Swiper('.community-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      speed: 500,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        600: {
          slidesPerView: 'auto',
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 'auto',
          spaceBetween: 30,
        }
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      if (this.getAttribute('href') === '#') return

      const targetElement = document.querySelector(this.getAttribute('href'))
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        })

        // Close mobile menu when link is clicked
        if (menu && menu.classList.contains('active')) {
          menu.classList.remove('active')
          if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active')
          }
        }
      }
    })
  })
}) 