import { useState, useEffect } from "react"

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // Adjust this value based on your navbar height
      const elementPosition = element.offsetTop - navHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return {
    activeSection,
    scrollToSection,
  }
}

