import React, { useRef, useEffect } from "react";

import "./Banner.css";
import "../Section/Section.css";

export const Banner = () => {
  const slideShowRef = useRef(null);

  useEffect(() => {
    if (slideShowRef.current) {
      slideShowRef.current.classList.add("This");

      let index = 0;
      //instead of document....slideShowRef.current - methods of DOM elements 
      let slides = slideShowRef.current.querySelectorAll(".image__slides");
      let dot = slideShowRef.current.querySelectorAll(".dot");

      changeSlide(index, slides,dot);
    }
  }, []);

  return (
    // <div>Banner</div>
    // <div id="Banner">Banner

    <div id="Banner">
      <div className="Banner__container">
        <div className="Banner__content">
          <img
            className="bgd__image"
            src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2020/02/hbg22.jpg"
            alt="#"
          />
          {/* <img classNameName="bgd__image" src="../img/home__1.png" alt="#" /> */}

          <div className="animated__image-container" ref={slideShowRef}>
            <div className="image__slides">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2020/02/home_02_slide_1.png"
                alt="#"
              />
            </div>

            <div className="image__slides">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2020/02/home_02_slide_3.png"
                alt="#"
              />
            </div>

            <div className="image__slides">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2020/02/home_02_slide_2.png"
                alt="#"
              />
            </div>

            <div className="dot__container">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="Headline__container">
            <h1 className="Shop__name">COLLECTION</h1>
            <div className="Headline__season">
              Exclusive <span> Winter </span>
            </div>
            <div className="Headline__strapline">New contemporary Fashion </div>
            <div className="Headline__action">SHOP NOW </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function changeSlide(index, slides, dot) {
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
  setTimeout(() => changeSlide(index,slides,dot), 5000);
}

// changeSlide();
