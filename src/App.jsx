import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero/>
      <Benefits/>
      <Pricing/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
