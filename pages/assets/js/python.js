/**
* Template Name: Vesperr
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()


// popup
const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load", function () {

  showPopup();
  //  setTimeout(function(){
  //    loginPopup.classList.add("show");
  //  },5000)

})

function showPopup() {
  const timeLimit = 3 // seconds;
  let i = 0;
  const timer = setInterval(function () {
    i++;
    if (i == timeLimit) {
      clearInterval(timer);
      loginPopup.classList.add("show");
    }
    console.log(i)
  }, 1000);
}


close.addEventListener("click", function () {
  loginPopup.classList.remove("show");
})

// hiring partners 
$(document).ready(function () {

  $('.items').slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 10,
    slidesToScroll: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }

    ]
  });
});

const firebaseConfig = {
  databaseURL: "https://global-lifetech-academy-default-rtdb.firebaseio.com"
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()


// popup form
function IndexPopupQuery(event) {
  console.log("clicked")
  event.preventDefault()
  let name = document.getElementById("index_name3").value
  let email = document.getElementById("index_email3").value
  let mobile = document.getElementById("index_mobile3").value
  let course = document.getElementById("index_course3").value
  let training = document.getElementById("index_training3").value
  let location = document.getElementById("index_location3").value

  console.log(name, email, mobile, course, training, location)
  var listRef = database.ref('GlobalLifeTech_Enquiry/')
  var newRef = listRef.push()
  newRef.set({
    'name': name,
    'email': email,
    'mobile': mobile,
    "course": course,
    "training": training,
    "location": location
  })
  var body = "Name: " + name + "<br/><br/>Email: " + email + "<br/><br/> Mobile: " + mobile + "<br/><br/> Course: " + course + "<br/><br/> Training Type: " + training + "<br/><br/> Training Location: " + location

  console.log(body);
  Email.send({
    SecureToken: "8c5aebbb-a633-4a55-b57d-b8229df4a33e",
    Host: "smtp.elasticemail.com",
    Username: "raghavdev322@gmail.com",
    Password: "0DDAF1431DCCFD9D19E12A72FC2C1B4504B9",
    To: 'globallifetech@gmail.com',
    From: "globallifetech@gmail.com",
    Subject: "Global LifeTech Enquiry",
    Body: body
  })
    .then(() => {
      alert("We will get back to you very Soon...!!")
      document.getElementById("index_name3").value = ""
      document.getElementById("index_email3").value = ""
      document.getElementById("index_mobile3").value = ""
      document.getElementById("index_course3").value = ""
      document.getElementById("index_training3").value = ""
      document.getElementById("index_location3").value = ""
    }).catch(() => {
      alert("Network Error, So try after some time ")
      document.getElementById("index_name3").value = ""
      document.getElementById("index_email3").value = ""
      document.getElementById("index_mobile3").value = ""
      document.getElementById("index_course3").value = ""
      document.getElementById("index_training3").value = ""
      document.getElementById("index_location3").value = ""
    })
}


// contact
function pythonContact(event) {
  console.log("clicked")
  event.preventDefault()
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let mobile = document.getElementById("mobile").value
  let course = document.getElementById("course").value
  let training = document.getElementById("trainingtype").value
  let location = document.getElementById("location").value

  console.log(name, email, mobile, course, training, location)
  var listRef = database.ref('GlobalLifeTech_Enquiry/')
  var newRef = listRef.push()
  newRef.set({
    'name': name,
    'email': email,
    'mobile': mobile,
    "course": course,
    "training": training,
    "location": location
  })
  var body = "Name: " + name + "<br/><br/>Email: " + email + "<br/><br/> Mobile: " + mobile + "<br/><br/> Course: " + course + "<br/><br/> Training Type: " + training + "<br/><br/> Training Location: " + location

  console.log(body);
  Email.send({
    SecureToken: "8c5aebbb-a633-4a55-b57d-b8229df4a33e",
    Host: "smtp.elasticemail.com",
    Username: "raghavdev322@gmail.com",
    Password: "0DDAF1431DCCFD9D19E12A72FC2C1B4504B9",
    To: 'globallifetech@gmail.com',
    From: "globallifetech@gmail.com",
    Subject: "Global LifeTech Enquiry",
    Body: body
  })
    .then(() => {
      alert("We will get back to you very Soon...!!")
      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("mobile").value = ""
      document.getElementById("course").value = ""
      document.getElementById("trainingtype").value = ""
      document.getElementById("location").value = ""
    }).catch(() => {
      alert("Network Error, So try after some time ")
      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("mobile").value = ""
      document.getElementById("course").value = ""
      document.getElementById("trainingtype").value = ""
      document.getElementById("location").value = ""
    })
}
