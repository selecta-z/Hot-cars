AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 80, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



document.addEventListener("scroll", function() {
    var middle0 = document.querySelector(".middle-0");
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
  


    if (scrollPosition >= windowHeight / 10) {
      middle0.classList.add("fixed");
    } else {
      middle0.classList.remove("fixed");
    }
  });
  


// =========================infinity-slider=========================

const blocks = document.querySelectorAll('.hot-cars-block__car');
const hiddenTexts = document.querySelectorAll('.hot-cars-block__info');

blocks.forEach((block, index) => {
  block.addEventListener('mouseenter', () => {
    // hiddenTexts.forEach(text => {
    //   text.classList.remove('active');
    // });

    hiddenTexts[index].classList.add('active');
  });

  block.addEventListener('mouseleave', () => {
    hiddenTexts.forEach(text => {
      text.classList.remove('active');
    });

  });
});

// =========================google-map=========================

let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

// =========================duplicate-blocks=========================

// var copy_of_hotCars = document.querySelector('.scrolling-content-1').cloneNode(true)
// document.querySelector('.scrolling-container-1').appendChild(copy_of_hotCars)

// var copy_of_hotCars = document.querySelector('.scrolling-content-2').cloneNode(true)
// document.querySelector('.scrolling-container-2').appendChild(copy_of_hotCars)

// var copy_of_hotCars = document.querySelector('.hot-cars-block__info').cloneNode(true)
// document.querySelector('.hot-cars-block__car').appendChild(copy_of_hotCars)


