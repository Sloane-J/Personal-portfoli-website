import { useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme") as Theme
      if (stored) return stored
    }
    // Default to system
    return "system"
  })

  useEffect(() => {
    const root = window.document.documentElement
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

    root.classList.remove("light", "dark")

    const effectiveTheme = theme === "system" ? systemTheme : theme
    root.classList.add(effectiveTheme)
    localStorage.setItem("theme", theme)
  }, [theme])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(mediaQuery.matches ? "dark" : "light")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  return {
    theme,
    setTheme,
    isSystemTheme: theme === "system",
    isDarkTheme: theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches),
  }
}

