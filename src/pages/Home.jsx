import Header from '../components/Header.jsx'
import Banner from '../sections/Banner.jsx'
import About from '../sections/About.jsx'
import Footer from '../components/Footer.jsx'
import Proyectos from '../sections/Projects.jsx'
import Hard from '../sections/HardSkills.jsx'
import Soft from '../sections/SoftSkills.jsx'
import Contacto from '../sections/Contacto.jsx'
import Exp from '../sections/Experience.jsx'
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className='translate-y-5'>
        <Banner />
        <About />
        <Soft/>
        <Hard />
        <Exp/>
        <Contacto/>
        <Proyectos />
      </main>
      <Footer />
    </div>
  )
}