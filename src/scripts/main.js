import '../styles/main.sass';

const Parallax = (factor1, factor2, factor3) => {
  const items = {
    big_circle: {
      element: document.querySelector('.js-big_circle'),
      factor: factor1
    },
    photo_author: {
      element: document.querySelector('.js-photo_author'),
      factor: factor2
    },
    small_circle: {
      element: document.querySelector('.js-small_circle'),
      factor: factor3
    }
  };
  if (window.innerWidth > 900) {
    document.addEventListener('mousemove', () => {
      let x_mouse = event.clientX - (window.innerWidth / 2);
      for (let n in items) {
        items[n].element.style.transform = `translate3D(${x_mouse / items[n].factor}px, 0, 0)`;
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // To change parallax factors, change parameters in this call.
  Parallax(50, -25, -8);
});
