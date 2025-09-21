import React, { useRef } from "react"
import { useScroll } from "framer-motion"
import Card from "../Testimonials/Card"

const index = () => {
  const projects = [
    {
      name: "Konrad Schäfers",
      testimonial: "I worked with Lelde on two projects: first with my startup Clap, where she shaped our LinkedIn strategy and generated high-value B2B leads, and later to establish my personal brand. Both collaborations were excellent.",
      logo_name: "Konrad Schäfers",
      image_src: "img-card-1.png",
      logo_src: "img-icon-1.png",
      color: "linear-gradient(90deg, #C6FFDD 0%, #FBD786 50%, #F7797D 100%)"
    },
    {
      name: "Claudia Hilti",
      testimonial: "Lelde adapts quickly to new challenges while maintaining high  professionalism. She is a fast, independent content creator who brings  innovative ideas and drives growth for startups.",
      logo_name: "Claudia Hilti",
      image_src: "img-card-2.png",
      logo_src: "img-icon-2.png",
      color: "linear-gradient(90deg, #FF5F6D 0%, #FF916F 50%, #FFC371 100%)"
    },
    {
      name: "Ricardia Bramley",
      testimonial: "Having worked with Lelde on multiple projects, I’ve seen her strong eye for trends and design. She quickly develops and executes ideas while staying focused on client needs. I highly recommend her.",
      logo_name: "Senior Podcast Producer & Co-Host",
      image_src: "img-card-3.png",
      logo_src: "img-icon-3.png",
      color: "linear-gradient(90deg, #C2E59C 0%, #96CDC5 50%, #64B3F4 100%)"
    },
    {
      name: "Ania Kuvaeva",
      testimonial: "Thank you, Lelde, for your work with DramaBuddy. You built strong collaborations with creators and delivered results that will positively impact our future development. It was a pleasure working with you.",
      logo_name: "Founder Drama Buddy",
      image_src: "img-card-4.png",
      logo_src: "img-icon-4.png",
      color: "linear-gradient(90deg, #D9A7C7 0%, #ECD2D2 50%, #FFFCDC 100%)"
    },
    {
      name: "Dimitris Messinis",
      testimonial: "I felt lucky to be able to work with Lelde. She has a great gift  for content creation and I am glad our paths crossed already at the  beginning of her career. I hope that we will work again together in the  future.",
      logo_name: "Senior Podcast Producer & Co-Host",
      image_src: "img-card-5.png",
      logo_src: "img-icon-5.png",
      color: "linear-gradient(90deg, #A1FFCE 0%, #CDFFCF 50%, #FAFFD1 100%)"
    }
  ]

  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })

  return (
    <section id="testimonials" className="relative min-h-screen flex flex-col mt-20 sm:mt-50 md:mt-20 lg:mt-50">
      <h3 className="text-[40px] font-instrument-serif text-center leading-[100%]">What do my clients say about me?</h3>

      <div ref={container} className="relative mt-[10vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05
          return <Card key={i} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
        })}
      </div>
    </section>
  )
}

export default index
