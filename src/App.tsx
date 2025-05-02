import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Categories from "./components/Categories/Categories";
import Separator from "./components/Section/Section";
import HeroSection from "./components/herosection/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Separator text="Available Categories" />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
