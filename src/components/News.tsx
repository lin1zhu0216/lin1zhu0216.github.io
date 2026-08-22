import { news, type NewsLink } from "../data/news"
import { Section } from "./Section"

function renderNewsText(text: string, links: NewsLink[] = []) {
  const segments = links.reduce<Array<string | NewsLink>>(
    (currentSegments, link) =>
      currentSegments.flatMap((segment) => {
        if (typeof segment !== "string") {
          return [segment]
        }

        const splitText = segment.split(link.label)

        if (splitText.length === 1) {
          return [segment]
        }

        return splitText.flatMap((part, index) =>
          index === splitText.length - 1 ? [part] : [part, link],
        )
      }),
    [text],
  )

  return segments.map((segment, index) =>
    typeof segment === "string" ? (
      segment
    ) : (
      <a
        key={segment.label + "-" + index}
        href={segment.href}
        target="_blank"
        rel="noreferrer"
      >
        {segment.label}
      </a>
    ),
  )
}

export function News() {
  return (
    <Section id="news" mark="" title="News">
      <ul className="news-list">
        {news.map((item) => (
          <li className="news-item" key={item.date + "-" + item.text}>
            <span className="news-item__text">
              <span className="news-item__icon" aria-hidden="true">
                🎉🎉
              </span>
              {renderNewsText(item.text, item.links)}
            </span>
            <time className="news-item__date">{item.date}</time>
          </li>
        ))}
      </ul>
    </Section>
  )
}
