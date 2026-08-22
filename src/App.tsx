import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { News } from './components/News'
import { ProfileIntro } from './components/ProfileIntro'
import { Publications } from './components/Publications'
import { VisitorMap } from './components/VisitorMap'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main className="page-shell">
        <ProfileIntro />
        <News />
        <Education />
        <Publications />
        <VisitorMap />
      </main>
      <Footer />
    </>
  )
}

export default App
