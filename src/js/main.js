$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $(".navbar")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  $(".navi-li").on("click", function () {
    $("#navi")
      .find(".current")
      .removeClass("current");
    $(this).addClass("current");
  });

});

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
   * Mobile nav toggle
   */
    on('click', '.mobile-nav-toggle', function(e) {
      select('body').classList.toggle('mobile-nav-active')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })

  /**
   * Circular Progress Bar
   */

  const circularProgress =
    document.querySelectorAll(
      ".circular-progress"
    );

  Array.from(circularProgress).forEach(
    (progressBar) => {
      const progressValue =
        progressBar.querySelector(".percentage");
      const innerCircle =
        progressBar.querySelector(
          ".inner-circle"
        );
      let startValue = 0,
        endValue = Number(
          progressBar.getAttribute(
            "data-percentage"
          )
        ),
        speed = 50,
        progressColor = progressBar.getAttribute(
          "data-progress-color"
        );

      const progress = setInterval(() => {
        startValue++;
        progressValue.innerHTML = startValue + '<sup class="small">%</sup>';
        //progressValue.style.color = `${progressColor}`;
        //progressValue.style.color = 'red';

        innerCircle.style.backgroundColor = `${progressBar.getAttribute(
          "data-inner-circle-color"
        )}`;
       
        progressBar.style.background = `conic-gradient(${progressColor} ${
          startValue * 3.6
        }deg,${progressBar.getAttribute(
          "data-bg-color"
        )} 0deg)`;
        if (startValue === endValue) {
          clearInterval(progress);
        }
      
      }, speed);
     
    }
  );

    /** 
     * Carousel
     */
  var myCarousel = document.querySelector('#myCarousel')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
  })



})();
