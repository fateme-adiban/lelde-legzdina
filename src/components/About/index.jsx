import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { slideUp } from "@/animation"
import Image from "next/image"
import Word from "../Word"

const Index = () => {
  const phrase_1 = "You’ve built something incredible. The only problem? Not enough people know you exist. We fix that."
  const phrase_2 = "You’ve put in the work. You’ve built something worth noticing (even your dad’s bragging about it). But on LinkedIn, visibility isn’t automatic."

  const description = useRef(null)
  const isInView = useInView(description)

  return (
    <>
      <div id="about" className="flex flex-col md:flex-row px-12 mt-20 lg:mt-50 justify-between">
        <div className="flex flex-col gap-10 md:mt-15 lg:mt-0 lg:justify-center">
          <h2 className="text-[35px] xl:text-[60px] font-instrument-serif max-w-[500px] leading-[100%]">
            <Word value="Make Your LinkedIn Impossible to Ignore" />
          </h2>
          <p ref={description} className="text text-[18px] xl:text-[20px] font-noto-serif max-w-[80%] sm:max-w-[350px]">
            {phrase_1.split(" ").map((word, index) => {
              return (
                <span key={index} className="mask">
                  <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </p>
          <p className="text text-[18px] xl:text-[20px] font-noto-serif max-w-[80%] sm:max-w-[370px]">
            {phrase_2.split(" ").map((word, index) => {
              return (
                <span key={index} className="mask">
                  <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </p>
        </div>

        <Image src="/abt1.webp" width={600} height={1179} alt="about image" className="md:w-[300] md:h-[500px] lg:w-[400px] xl:w-[600px] xl:h-auto mt-15 md:mt-0" />
      </div>

      <div className="flex flex-col md:flex-row md:mt-20 2xl:mt-5 px-12 justify-between md:gap-20 2xl:gap-0">
        <Image src="/abt2.webp" width={470} height={550} alt="about image" className="md:w-[300] md:h-[500px] lg:w-[400px] xl:w-[470px] lg:h-auto mt-20 md:mt-0" />

        <div className="flex flex-col lg:justify-center md:mt-15 lg:mt-0">
          <h3 className="text-[25px] xl:text-[52px] font-instrument-serif leading-[120%] lg:leading-[150%] max-w-[90%] md:max-w-[830px] mt-10 md:mt-0">
            <Word value="That’s where we come in." />
            <Word value="We help founders and teams turn expertise into content that lands, sparks conversations, and drives opportunities, so the right people know who you are and why you matter." />
          </h3>
        </div>
      </div>
    </>
  )
}

export default Index
