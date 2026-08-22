import { profile } from "../data/profile"

export function Footer() {
  return (
    <footer className="site-footer">
      <span>Copyright {new Date().getFullYear()} {profile.name}</span>
    </footer>
  )
}
