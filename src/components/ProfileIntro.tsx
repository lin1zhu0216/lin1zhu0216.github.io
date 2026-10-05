import { profile } from "../data/profile"

type SocialIconProps = {
  label: string
}

function SocialIcon({ label }: SocialIconProps) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }

  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5s-5.548 1.749-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
    </svg>
  )
}

type BioLink = (typeof profile.bioLinks)[number]
type BioHighlight = { text: (typeof profile.bioHighlights)[number] }
type BioSegment = string | BioLink | BioHighlight

function splitBioSegment(segment: BioSegment, text: string, replacement: BioSegment) {
  if (typeof segment !== "string") {
    return [segment]
  }

  const splitText = segment.split(text)

  if (splitText.length === 1) {
    return [segment]
  }

  return splitText.flatMap((part, index) =>
    index === splitText.length - 1 ? [part] : [part, replacement],
  )
}

function isBioLink(segment: BioSegment): segment is BioLink {
  return typeof segment !== "string" && "href" in segment
}

function renderBioParagraph(paragraph: string) {
  const linkedSegments = profile.bioLinks.reduce<BioSegment[]>(
    (segments, link) =>
      segments.flatMap((segment) => splitBioSegment(segment, link.label, link)),
    [paragraph],
  )

  const highlightedSegments = profile.bioHighlights.reduce<BioSegment[]>(
    (segments, highlight) =>
      segments.flatMap((segment) =>
        splitBioSegment(segment, highlight, { text: highlight }),
      ),
    linkedSegments,
  )

  return highlightedSegments.map((segment, index) => {
    if (typeof segment === "string") {
      return segment
    }

    if (isBioLink(segment)) {
      return (
        <a
          key={segment.label + "-" + index}
          href={segment.href}
          target="_blank"
          rel="noreferrer"
        >
          {segment.label}
        </a>
      )
    }

    return <strong key={segment.text + "-" + index}>{segment.text}</strong>
  })
}

export function ProfileIntro() {
  return (
    <section className="profile-intro" id="bio" aria-labelledby="bio-title">
      <div className="profile-card" aria-label="Profile information">
        <img className="profile-photo" src="/profile.jpg" alt="Lin ZHU" />

        <p className="profile-email">{profile.emailText}</p>

        <div className="social-links">
          {profile.contactLinks.map((link) => (
            <a
              key={link.label}
              className="social-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              <SocialIcon label={link.label} />
            </a>
          ))}
        </div>
      </div>

      <div className="bio">
        <h2 className="section-heading bio__heading" id="bio-title">
          Bio
        </h2>
        <div className="bio__body">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{renderBioParagraph(paragraph)}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
