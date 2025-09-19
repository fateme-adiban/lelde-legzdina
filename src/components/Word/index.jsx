import React, { useRef } from "react"
import { useScroll, motion, progress, useTransform } from "framer-motion"

export default function Word({ value }) {
  const element = useRef(null)

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.7", "start 0.3"]
  })

  const words = value.split(" ")

  return (
    <p ref={element} className="paragraph">
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        console.log([start, end])

        return (
          <WordEl key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </WordEl>
        )
      })}
    </p>
  )
}

const WordEl = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="word">
      <span className="shadow">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  )
}
