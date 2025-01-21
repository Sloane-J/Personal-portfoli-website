import { cn } from "@/utils/cn"

interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  colored?: boolean
}

export function Section({ id, className, children, colored = false }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-20", colored && "bg-muted/30", className)}>
      <div className="container px-4 mx-auto">{children}</div>
    </section>
  )
}

// Usage:
// <Section id="about" colored>
//   <h2>About Me</h2>
// </Section>

