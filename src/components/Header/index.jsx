"use client"
import { useEffect } from "react"
import gsap from "gsap"
import styles from "./style.module.css"
import Image from "next/image"

export default function Index() {
  useEffect(() => {
    gsap.set(`.${styles.header}`, { y: -200 })
    gsap.to(`.${styles.header}`, {
      y: 0,
      duration: 1,
      ease: "circ.out",
      delay: 3
    })
  }, [])

  return (
    <>
      <div className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.el}>
            <a
              href="#about"
              onClick={e => {
                e.preventDefault()
                const about = document.querySelector("#about")
                if (about) {
                  const y = about.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({ top: y, behavior: "smooth" })
                }
              }}
            >
              About
            </a>
          </div>

          <div className={styles.el}>
            <a
              href="#gallery"
              onClick={e => {
                e.preventDefault()
                const gallery = document.querySelector("#gallery")
                if (gallery) {
                  const y = gallery.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({ top: y, behavior: "smooth" })
                }
              }}
            >
              Gallery
            </a>
          </div>

          <div className={styles.el}>
            <a
              href="#services"
              onClick={e => {
                e.preventDefault()
                const services = document.querySelector("#services")
                if (services) {
                  const y = services.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({ top: y, behavior: "smooth" })
                }
              }}
            >
              Services
            </a>
          </div>

          <div className={styles.el}>
            <a
              href="#testimonials"
              onClick={e => {
                e.preventDefault()
                const testimonials = document.querySelector("#testimonials")
                if (testimonials) {
                  const y = testimonials.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({ top: y, behavior: "smooth" })
                }
              }}
            >
              Testimonials
            </a>
          </div>

          <div className={styles.el}>
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                const contact = document.querySelector("#contact")
                if (contact) {
                  const y = contact.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({ top: y, behavior: "smooth" })
                }
              }}
            >
              Contact
            </a>
          </div>
        </div>

        <div className={styles.logo}>
          <p>Lelde Legzdina</p>
        </div>

        <div className={styles.icons}>
          <div className="hidden md:flex gap-2">
            <Image onClick={() => window.open("https://www.linkedin.com/in/leldelegzdina", "_blank")} src="/linkedin.svg" width={16} height={16} alt="linkedin icon" />
            <Image onClick={() => window.open("mailto:legzdinalelde@gmail.com")} src="/email.svg" width={20} height={16} alt="email icon" />
          </div>

          <div className="md:hidden flex gap-2 mt-3">
            <Image onClick={() => window.open("https://www.linkedin.com/in/leldelegzdina", "_blank")} src="/linkedin-white.svg" width={16} height={16} alt="linkedin icon" />
            <Image onClick={() => window.open("mailto:legzdinalelde@gmail.com")} src="/email-white.svg" width={20} height={16} alt="email icon" />
          </div>
        </div>
      </div>
    </>
  )
}
