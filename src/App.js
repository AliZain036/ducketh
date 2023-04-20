import "./App.css"
import "../src/style.css"
import Header from "./components/Header"
import Swiper from "./components/Swiper"
import LogoSlider from "./components/LogoSlider"
import GetStarted from "./components/GetStarted"
import ItemDetail from "./components/ItemDetail"
import About from "./components/About"
import Footer from "./components/Footer"
import Roadmap from "./components/Roadmap"
import FAQ from "./components/FAQ"
import { useEffect, useState } from "react"

function App() {
  const [showItem, setShowItem] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const viewportHeight = window.innerHeight
      setShowItem(viewportHeight > 100)
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <Swiper />
      <LogoSlider />
      <div
        class="container twitter-images-show-case gap-3"
        id="elone"
        style={{ paddingTop: "60px" }}
      >
        <img
          src="https://ducketh.fun/assets/images/nft/e-twite1.png"
          alt="Image 1"
        />
        <img
          src="https://ducketh.fun/assets/images/nft/e-twite2.png"
          alt="Image 2"
        />
      </div>
      <GetStarted />
      <ItemDetail />
      <About />
      <Roadmap />
      <FAQ />
      <Footer />
      {showItem && (
        <a
          id="scroll-top"
          class="show"
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <i
            class="fa-solid fa-chevron-up text-white"
            style={{ fontWeight: "600", fontSize: "18px", marginTop: "1.5rem" }}
          ></i>
        </a>
      )}
    </div>
  )
}

export default App
