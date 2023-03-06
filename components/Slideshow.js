import styles from '../styles/page.module.css';
import React, { useState } from 'react';
import Image from 'next/image';

const Slideshow = ({slides}) => {

  const getNextSlide = () => {
    // const slideWidth = slide.clientWidth;
    // slidesContainer.scrollLeft += slideWidth;
  }

  const getPreviousSlide = () => {
    // const slideWidth = slide.clientWidth;
    // slidesContainer.scrollLeft -= slideWidth;
  }

  return (
    <div className={styles.slideshow}>
      <div className={styles.slideshowInner}>
        {slides.map((src, index) => {
          return (
            <li class={styles.slide} key={index}>
              <Image
                src={src}
                alt={index}
                fill
              />
            </li>
          )
        })}
      </div>
  </div>
  )
}

export default Slideshow;