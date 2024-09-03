import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Projects } from './pages/Projects'

function App() {
  return (
    <>
        <Header />
        <section id="Home" > <Home/> </section>
        <section id="About" > <About/> </section>
        <section id="Services"> <Services/> </section>
        <section id="projects"> <Projects/> </section>
    <Footer/>
    </>
  )
}

export default App
