import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';

import styles from '../styles/page.module.css';

const autoplayOptions = {
  delay: 4000,
  rootNode: (emblaRoot) => emblaRoot.parentElement,
}

export const Carousel = (props) => {
  const { slides } = props
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
      {slides.map((src, index) => {
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
      )})}
      </div>
    </div>
  )
}
