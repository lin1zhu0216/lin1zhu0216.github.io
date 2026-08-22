import { profile } from '../data/profile'

const navItems = [
  { label: 'Bio', href: '#bio' },
  { label: 'News', href: '#news' },
  { label: 'Educations', href: '#education' },
  { label: 'Publications', href: '#publications' },
]

export function NavBar() {
  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <a className="site-nav__name" href="#bio">
          {profile.name}
        </a>
        <nav className="site-nav__links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
