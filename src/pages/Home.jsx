import Navbar from "../components/layout/Navbar"
import PromoBanner from "../components/layout/PromoBanner"
import Footer from "../components/layout/Footer"
import FAQSection from "../components/layout/FAQSection"
function Home() {

  return (
    <>
      <Navbar />
      <FAQSection />
      <PromoBanner />
      <Footer />
    </>
  )
}

export default Home