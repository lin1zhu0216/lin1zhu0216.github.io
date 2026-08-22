import { education } from "../data/education"
import { Section } from "./Section"

export function Education() {
  return (
    <Section id="education" mark="" title="Educations">
      <ul className="education-list">
        {education.map((item) => (
          <li className="education-item" key={`${item.school}-${item.degree}`}>
            <div className="education-item__header">
              <p className="education-item__school">{item.school}</p>
              <div className="education-item__date">
                {item.start} - {item.end}
              </div>
            </div>
            <p className="education-item__degree">{item.degree}</p>
            <p className="education-item__focus">{item.details}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
