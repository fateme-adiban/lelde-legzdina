import React from "react"

const index = () => {
  const list_items_1 = ["Home", "About", "Gallery", "Services", "Testimonials", "Contact"]
  const list_items_2 = [{ label: "LinkedIn", url: "https://www.linkedin.com/in/leldelegzdina" }]

  return (
    <section className="relative h-[450px] md:h-[650px] lg:min-h-screen overflow-hidden flex flex-col justify-between">
      <div className="flex  justify-between items-start px-5 md:px-10 xl:px-30 lg:mt-20">
        <div className="flex flex-col text-[16px] sm:text-[3vw] lg:text-[30px] font-noto-serif font-medium tracking-[-5%]">
          <h3 className="border-b w-[150px] sm:w-[40vw] 2xl:w-[550px]">Menu</h3>
          <ul className="mt-3.5">
            {list_items_1.map((list_item, index) => {
              const sectionId = list_item.toLowerCase()
              return (
                <li className="py-[3px]" key={index}>
                  <a
                    href={`#${sectionId}`}
                    onClick={e => {
                      e.preventDefault()
                      const target = document.getElementById(sectionId)
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    {list_item}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex flex-col text-[16px] sm:text-[3vw] lg:text-[30px] font-noto-serif font-medium tracking-[-5%]">
          <h3 className="border-b w-[150px] sm:w-[40vw] 2xl:w-[550px]">Socials</h3>
          <ul className="mt-3.5">
            {list_items_2.map((item, index) => (
              <li className="py-[3px]" key={index}>
                <a
                  href={item.url}
                  onClick={e => {
                    e.preventDefault()
                    window.open(item.url, "_blank", "noopener,noreferrer")
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center font-noto-serif md:-mb-[10px] 2xl:-mb-[15px]">
        <p className="text-[12vw] 2xl:text-[180px] font-semibold">Lelde Legzadina</p>
      </div>
    </section>
  )
}

export default index
