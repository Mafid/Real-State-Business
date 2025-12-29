import Navbar from "../components/layout/Navbar"
import PromoBanner from "../components/layout/PromoBanner"
import Footer from "../components/layout/Footer"
import FAQSection from "../components/layout/FAQSection"
import TestimonialsSection from "../components/layout/TestimonialsSection"
function Home() {

  return (
    <>
      <Navbar />
      <TestimonialsSection />
      <FAQSection />
      <PromoBanner />
      <Footer />
    </>
  )
}

export default Home