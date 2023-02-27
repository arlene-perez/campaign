import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';

import styles from '../styles/page.module.css';
import IMAGE_ONE from '../public/image1.jpg';
import IMAGE_TWO from '../public/image4.jpg';
import IMAGE_THREE from '../public/image3.jpg';

// const autoplayOptions = {
//   delay: 4000,
//   rootNode: (emblaRoot) => emblaRoot.parentElement,
// }

export const Carousel = (props) => {
  const { slides } = props
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
      <div className={styles.embla__slide} key="1">
          <Image
            src={IMAGE_ONE}
            alt="Image One"
            className={styles.embla__slide__img}
            fill
          />
        </div>
        <div className={styles.embla__slide} key="2">
          <Image
            src={IMAGE_TWO}
            alt="Image Two"
            className={styles.embla__slide__img}
            fill
          />
        </div>
        <div className={styles.embla__slide} key="3">
          <Image
            src={IMAGE_THREE}
            alt="Image Three"
            className={styles.embla__slide__img}
            fill
          />
        </div>
      {/* {slides.map((src, index) => {
        return (
        <div className={styles.embla__slide} key={index}>
          <Image
            src={src}
            alt={index}
            className={styles.embla__slide__img}
            fill
            objectFit="contain"
          />
        </div>
      )})} */}
      </div>
    </div>
  )
}
