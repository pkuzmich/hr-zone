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

  // Form validation
  const contactForm = document.querySelector('.contact form')
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault()

      const email = document.getElementById('email')
      const message = document.getElementById('message')
      const gdpr = document.getElementById('gdpr')
      let isValid = true

      // Simple email validation
      if (!email.value || !email.value.includes('@')) {
        email.classList.add('error')
        isValid = false
      } else {
        email.classList.remove('error')
      }

      // Check if message is not empty
      if (!message.value.trim()) {
        message.classList.add('error')
        isValid = false
      } else {
        message.classList.remove('error')
      }

      // Check GDPR consent
      if (gdpr && !gdpr.checked) {
        gdpr.parentElement.classList.add('error')
        isValid = false
      } else if (gdpr) {
        gdpr.parentElement.classList.remove('error')
      }

      if (isValid) {
        // Here you would normally send the form data to the server
        // For now, just show a success message
        alert('Zpráva byla úspěšně odeslána!')
        contactForm.reset()
      }
    })
  }
}) 