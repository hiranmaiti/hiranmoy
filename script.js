// gsap.from("#img", {
//   x: 100,
//   opacity: 0,
//   rotate: 360,
// });

document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");
  
    const options = {
      threshold: 0.5
    };
  
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const width = progressBar.getAttribute("data-width");
          progressBar.style.width = width;
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    progressBars.forEach((progressBar) => {
      observer.observe(progressBar);
    });
  });