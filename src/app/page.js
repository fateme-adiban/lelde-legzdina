"use client"
import { useEffect } from "react"
import Lenis from "lenis"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "@/components/About"
import Gallery from "@/components/Gallery"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Gallery />
    </main>
  )
}
