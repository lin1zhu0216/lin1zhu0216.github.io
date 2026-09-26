import { publicationSections } from "../data/publications"
import { Section } from "./Section"

type PublicationLinkIconProps = {
  label: string
}

function PublicationLinkIcon({ label }: PublicationLinkIconProps) {
  const logoLinks: Record<string, { src: string; className: string }> = {
    arxiv: { src: "/logos/arxiv.svg", className: "publication-link-image--arxiv" },
    software: { src: "/logos/pypi.svg", className: "publication-link-image--pip" },
    huggingface: {
      src: "/logos/huggingface.svg",
      className: "publication-link-image--huggingface",
    },
  }

  if (label === "code") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    )
  }

  const logo = logoLinks[label]
  if (logo) {
    return (
      <img
        className={`publication-link-image ${logo.className}`}
        src={logo.src}
        alt=""
        aria-hidden="true"
      />
    )
  }

  return <span className="publication-link-logo">{label}</span>
}

function renderAuthors(authors: string) {
  const parts = authors.split(/(Lin Zhu\*?)/g)

  return parts.map((part, index) => (
    <span key={part + "-" + index}>
      {part.startsWith("Lin Zhu") ? <strong>{part}</strong> : part}
    </span>
  ))
}

function getLinkTitle(label: string) {
  if (label === "arxiv") {
    return "arXiv"
  }

  if (label === "code") {
    return "GitHub code"
  }

  if (label === "software") {
    return "PyPI software"
  }

  if (label === "huggingface") {
    return "Hugging Face"
  }

  return label
}

function renderVenue(venue: string) {
  const parts = venue.split(/(NeurIPS|AISTATS)/g)

  return parts.map((part, index) =>
    part === "NeurIPS" || part === "AISTATS" ? (
      <span className="publication__venue-acronym" key={part + "-" + index}>
        {part}
      </span>
    ) : (
      part
    ),
  )
}

export function Publications() {
  return (
    <Section id="publications" mark="" title="Publications">
      <p className="publication-note">(* means equal first author.)</p>
      <div className="publication-sections">
        {publicationSections.map((section) => (
          <div className="publication-subsection" key={section.title}>
            <h3 className="publication-subheading">{section.title}</h3>
            {section.papers.length > 0 ? (
              <ul className="publication-list">
                {section.papers.map((paper) => (
                  <li className="publication" key={paper.title}>
                    <div className="publication__row">
                      <div className="publication__body">
                        <p className="publication__title">
                          <span className="publication__title-text">{paper.title}</span>
                          {paper.links?.length ? (
                            <span className="publication__links">
                              {paper.links.map((link) => (
                                <a
                                  key={link.label}
                                  className="publication__link"
                                  href={link.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label={getLinkTitle(link.label)}
                                  title={getLinkTitle(link.label)}
                                >
                                  <PublicationLinkIcon label={link.label} />
                                </a>
                              ))}
                            </span>
                          ) : null}
                        </p>
                        <p className="publication__authors">{renderAuthors(paper.authors)}</p>
                        {paper.venue ? (
                          <p className="publication__venue">{renderVenue(paper.venue)}</p>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : section.emptyText ? (
              <p className="publication-empty">{section.emptyText}</p>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  )
}
