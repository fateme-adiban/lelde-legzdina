"use client"
import React, { useRef } from "react"
import styles from "./styles.module.css"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const index = ({ i, name, testimonial, logo_name, image_src, logo_src, color, progress, range, targetScale }) => {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div style={{ scale, background: color, top: `calc(-10% + ${i * 25}px)` }} className={styles.card}>
        <h2>{name}</h2>

        <div className={styles.body}>
          <div className={styles.description}>
            <p>{testimonial}</p>

            <div className={styles.logoContainer}>
              <div className={styles.logoWrapper}>
                <Image fill src={`/${logo_src}`} alt="logo" />
              </div>
              <p>{logo_name}</p>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <motion.div style={{ scale: imageScale }} className={styles.inner}>
              <Image fill src={`/${image_src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default index
