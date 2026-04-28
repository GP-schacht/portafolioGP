import Header from '../components/Header.jsx'
import Banner from '../sections/Banner.jsx'
import About from '../sections/About.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main className="mt-28">
        <Banner />
        <About />
      </main>
      <Footer />
    </div>
  )
}