document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     FAQ TOGGLE
  ========================== */
  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("active");
    });
  });

  /* =========================
     SLIDERS (SLICK)
  ========================== */
  if (typeof $ !== "undefined") {

    if ($(".media-slider").length) {
      $(".media-slider").slick({
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

    if ($(".partners-slider").length) {
      $(".partners-slider").slick({
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
  }

  /* =========================
     COUNTER ANIMATION
  ========================== */
  const counters = document.querySelectorAll(".counter");
  let counterStarted = false;

  const startCounters = () => {
    if (counterStarted) return;
    counterStarted = true;

    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let count = 0;
      const speed = target > 1000 ? 80 : 40;

      const update = () => {
        count += Math.ceil(target / speed);
        if (count < target) {
          counter.textContent = count.toLocaleString();
          requestAnimationFrame(update);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };
      update();
    });
  };

  const statsSection = document.querySelector(".stats-section");
  if (statsSection) {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) startCounters();
    }, { threshold: 0.4 });
    observer.observe(statsSection);
  }

  /* =========================
     PHONE NUMBER VALIDATION
  ========================== */
  const phoneInput = document.getElementById("phoneInput");
  const phoneError = document.getElementById("phoneError");
  const phoneValidIcon = document.getElementById("phone-valid");

  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "");

      if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
      }

      const isValid = /^[6-9]\d{9}$/.test(this.value);

      if (isValid) {
        phoneError.style.display = "none";
        phoneValidIcon.style.display = "inline";
      } else {
        phoneError.style.display = "block";
        phoneValidIcon.style.display = "none";
      }
    });
  }

  /* =========================
     FORM SUBMIT VALIDATION
  ========================== */
  const form = document.querySelector(".register-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const phone = phoneInput.value;

      if (!/^[6-9]\d{9}$/.test(phone)) {
        e.preventDefault();
        alert("Please enter a valid 10-digit mobile number.");
      }
    });
  }

});
