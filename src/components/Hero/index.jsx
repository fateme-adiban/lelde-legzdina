"use client"
import React from "react"
import Image from "next/image"

export default function Index() {
  return (
    <section id="home" className="relative min-h-screen overflow-x-hidden flex flex-col md:flex-row gap-[8%]">
      <div className="relative w-full sm:w-auto">
        <Image src="/img-hero.webp" width={720} height={917} alt="hero image" className="w-full h-screen md:max-w-[720px] md:h-[917px]" />

        <div className="absolute inset-0 flex flex-col justify-end mb-10 items-center md:hidden bg-black/30">
          <h2 className="text-[15px] font-noto-serif uppercase mb-4 text-white">Personal & corporate branding</h2>
          <h1 className="text-[30px] leading-[110%] font-instrument-serif text-center max-w-[65%] sm:max-w-[45%] text-white">Build LinkedIn clarity, confidence & community in 60 days</h1>
          <button onClick={() => window.open("https://calendly.com/leldel/30minchat", "_blank")} className="text-[15px] text-white font-noto-serif uppercase cursor-pointer mt-8 border-white border-2 px-5 py-1 rounded-4xl">
            Book a call
          </button>
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-center items-center pr-10 2xl:pr-0">
        <h2 className="text-[15px] xl:text-[18px] font-noto-serif uppercase mb-4">Personal & corporate branding</h2>
        <h1 className="text-[30px] lg:text-[35px] xl:text-[60px] leading-[110%] font-instrument-serif text-center max-w-[500px] xl:max-w-[550px]">Build LinkedIn clarity, confidence & community in 60 days</h1>
        <div className="relative flex items-center mt-15">
          <button onClick={() => window.open("https://calendly.com/leldel/30minchat", "_blank")} className="text-[18px] font-noto-serif uppercase cursor-pointer">
            Book a call
          </button>
          <Image src="/red-arrow.svg" width={117} height={47} alt="red arrow icon" className="absolute -left-15 top-18 -translate-y-1/2" />
        </div>
      </div>

      <div className="absolute bottom-40 right-0 lg:bottom-20 lg:right-2 hidden md:flex flex-col items-center gap-7">
        <p className="text-[16px] font-cutive-mono transform rotate-[-270deg]">SCROLL</p>
        <Image src="/arrow.svg" width={12} height={16} alt="arrow icon" />
      </div>
    </section>
  )
}
