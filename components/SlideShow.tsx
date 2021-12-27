import styles from '@styles/SlideShow.module.css'
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from 'react'

export function Slide ({ className, children, maxWidth }: { className?: string, children: JSX.Element, maxWidth?: number }) {
  return (
    <div className={[styles.Slide, className].join(' ')} style={{ width: maxWidth + 'px' }}>
      {children}
    </div>
  )
}

export function SlideShow ({ className }: { className?: string }) {

  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(ref.current ? ref.current?.offsetWidth : 0)

  const [slides, setSlides] = useState([
    {
      src: '/plasmic/achyle_2/images/checkMyGuest.png',
      alt: "Check My Guest"
    },
    {
      src: '/plasmic/achyle_2/images/havas.png',
      alt: "Havas"
    },
  ])

  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log('width', ref.current ? ref.current?.offsetWidth : 0)
      setWidth(ref.current ? ref.current?.offsetWidth : 0)
    })
    setWidth(ref.current ? ref.current?.offsetWidth : 0)
    // const wrapper = Children.toArray(images)
    // console.log("🚀 ~ file: SlideShow.tsx ~ line 28 ~ useEffect ~ wrapper", wrapper)
    // if (React.isValidElement(wrapper)) {
    //   console.log("🚀 ~ file: SlideShow.tsx ~ line 29 ~ useEffect ~ wrapper", wrapper)
    //   // setSlides(wrapper)
    // }
    // // const wrapper = Children.toArray(images)[0]
    // // console.log("🚀 ~ file: SlideShow.tsx ~ line 19 ~ SlideShow ~ nbOfSlides", wrapper)
    // // console.log(wrapper.props.children.length)
    // // setSlides(Children.toArray(images)[0].props.children)
    // // console.log(slides)
    return window.removeEventListener('resize', () => {
      setWidth(ref.current ? ref.current?.offsetWidth : 0)
    })
  }, [])

  return (
    <div ref={ref} className={[styles.Wrapper, className].join(' ')}>
      <motion.div
        animate={{ x: [0, -width] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        style={{ display: 'flex', width: `calc(${width}px)` }}
      >
        {slides.map(slide => (
          <Slide key={slide.src} maxWidth={width / slides.length}>
            <img src={slide.src} alt={slide.alt} style={{ maxWidth: width / slides.length - 16 }} />
          </Slide>
        ))}
        {slides.map(slide => (
          <Slide key={slide.src} maxWidth={width / slides.length}>
            <img src={slide.src} alt={slide.alt} style={{ maxWidth: width / slides.length - 16 }} />
          </Slide>
        ))}
      </motion.div>
    </div>
  )
}