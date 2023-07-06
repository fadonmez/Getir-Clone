import { useState } from "react";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Categories from "./components/Categories.jsx";
import Campaigns from "./components/Campaigns.jsx";
import MobileApp from "./components/MobileApp.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <div className="container mx-auto">
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
