"use client"
import { useEffect, useState } from "react"
import Lenis from "lenis"
import { AnimatePresence } from "framer-motion"
import Preloader from "@/components/Preloader"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "@/components/About"
import Gallery from "@/components/Gallery"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      window.scrollTo(0, 0)
    }, 2000)
  }, [])

  return (
    <main>
      <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Testimonials />
    </main>
  )
}
