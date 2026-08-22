import type { ReactNode } from "react"

type SectionProps = {
  id: string
  mark?: string
  title: string
  children: ReactNode
}

export function Section({ id, mark, title, children }: SectionProps) {
  return (
    <section className="content-section" id={id} aria-labelledby={`${id}-title`}>
      <h2 className="section-heading" id={`${id}-title`}>
        {mark ? (
          <span className="section-heading__mark" aria-hidden="true">
            {mark}
          </span>
        ) : null}
        {title}
      </h2>
      {children}
    </section>
  )
}
