import { useCallback } from "react"

export function useScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // Adjust based on your navbar height
      const elementPosition = element.offsetTop - navHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }, [])

  return { scrollToSection }
}

// Usage example:
// const { scrollToSection } = useScroll()
// <button onClick={() => scrollToSection('about')}>Go to About</button>

