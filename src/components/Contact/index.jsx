import Image from "next/image"
import { useRef } from "react"
import { useInView, motion } from "framer-motion"
import { slideUp } from "@/animation"

const Index = () => {
  const phrase = "Let's make it happen"

  const description = useRef(null)
  const isInView = useInView(description)

  return (
    <section ref={description} id="contact" className="relative min-h-screen overflow-x-hidden mt-15 lg:mt-30">
      <div className="flex items-center justify-center min-h-screen w-full">
        <div className="max-w-[90%] h-[550px] 2xl:max-w-[1291px] md:min-h-[653px] rounded-[40px] bg-[url('/img-contact-2.webp')] w-full bg-cover bg-center flex flex-col gap-15 justify-center items-center">
          <h3 className="text-[30px] md:text-[40px] font-instrument-serif text-center mt-8 md:-mt-40 lg:mt-8 text-white">Need an unfair advantage?</h3>
          <p className="text text-[45px] sm:text-[12vw] lg:text-[150px] font-playfair-display font-bold text-white uppercase leading-[100%] tracking-[-1%] max-w-[900px] text-center">
            {phrase.split(" ").map((word, index) => {
              return (
                <span key={index} className="mask">
                  <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>
                    {word}
                  </motion.span>
                </span>
              )
            })}
          </p>
          <div className="relative flex items-center mt-10">
            <button onClick={() => window.open("https://calendly.com/leldel/30minchat", "_blank")} className="font-noto-serif text-[18px] xl:text-[25px] bg-white/50 px-6 xl:px-8 py-1 rounded-full cursor-pointer hover:bg-white/70 transform ease-in-out duration-500">
              Book a Call
            </button>
            <Image src="/arrow-white.svg" width="117" height="41" alt="white arrow" className="hidden md:block absolute left-55 top-0 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index

/* btn */
