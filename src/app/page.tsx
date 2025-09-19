import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Services from '@/components/sections/services'
import Projects from '@/components/sections/projects'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      {/* <Services />
      <Projects />
      <Contact /> */}
      <Footer />
    </main>
  )
}
