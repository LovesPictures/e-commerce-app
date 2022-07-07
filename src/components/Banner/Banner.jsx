import React from "react";

import "./Banner.css";
import "../Section/Section.css";

export const Banner = () => {
  return (
    // <div>Banner</div>
    // <div id="Banner">Banner

    <div id="Banner">
      <div class="Banner__container">
        <div class="Banner__content">
          <img
            class="bgd__image"
            src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2020/02/hbg22.jpg"
            alt="#"
          />
          {/* <img className="bgd__image" src="../img/home__1.png" alt="#" /> */}
          <div class="animated__image-container">
            <div class="image__slides">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2020/02/home_02_slide_1.png"
                alt="#"
              />
            </div>

            <div class="image__slides">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2020/02/home_02_slide_3.png"
                alt="#"
              />
            </div>

            <div class="image__slides">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2020/02/home_02_slide_2.png"
                alt="#"
              />
            </div>

            <div class="dot__container">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
          <div class="Headline__container">
            <h1 class="Shop__name">COLLECTION</h1>
            <div class="Headline__season">
              Exclusive <span> Winter </span>
            </div>
            <div class="Headline__strapline">New contemporary Fashion </div>
            <div class="Headline__action">SHOP NOW </div>
          </div>
        </div>
      </div>
    </div>
  );
};

let index = 0;
let slides = document.querySelectorAll(".image__slides");
let dot = document.querySelectorAll(".dot");

function changeSlide() {
  // Loop slides in both directions
  // Forward
  if (index > slides.length - 1) {
    index = 0;
  }
  // Backward
  if (index < 0) {
    index = slides.length - 1;
  }

  // Hide all the slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }

  // Unhide the indexed slide
  slides[index].style.display = "block";
  dot[index].classList.add("active");

  // Increment the slider number
  index++;

  // Waiting until change the next slide for 5 seconds
  setTimeout(changeSlide, 5000);
}

changeSlide();
