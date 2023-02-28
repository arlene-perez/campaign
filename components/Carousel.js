import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';

import styles from '../styles/page.module.css';

export const Carousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
        {slides.map((src, index) => {
          return (
          <div className={styles.embla__slide} key={index}>
            <img
              src={src}
              alt={index}
              className={styles.embla__slide__img}
            />
          </div>
        )})}
        </div>
      </div>
    </div>
  )
}
