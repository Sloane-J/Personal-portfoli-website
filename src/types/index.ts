// Only essential types for the portfolio
export interface Project {
    title: string
    description: string
    image: string
    tags: string[]
    github: string
    demo: string
  }
  
  export interface Skill {
    name: string
    level: number
  }
  
  export interface ContactForm {
    name: string
    email: string
    message: string
  }
  
  