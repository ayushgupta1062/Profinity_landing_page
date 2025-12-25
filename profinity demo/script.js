document.querySelectorAll(".faq-q").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});
$(document).ready(function () {
  $('.media-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 900,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

if ($('.partners-slider').length) {
    $('.partners-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 900,
      infinite: true,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 4 } },
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        { breakpoint: 480, settings: { slidesToShow: 2 } }
      ]
    });
  }

});

const counters = document.querySelectorAll('.counter');
let counterStarted = false;

const startCounters = () => {
  if (counterStarted) return;
  counterStarted = true;

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const speed = target > 1000 ? 80 : 30; 
    const updateCounter = () => {
      const increment = Math.ceil(target / speed);
      count += increment;

      if (count < target) {
        counter.innerText = count.toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCounter();
  });
};

const statsSection = document.querySelector('.stats-section');

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    startCounters();
  }
}, { threshold: 0.4 });

observer.observe(statsSection);

