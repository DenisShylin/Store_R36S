import "./App.css";

import Header from "./components/Sections/Header/Header";
import Hero from "./components/Sections/Hero/Hero";

import About from "./components/Sections/About/About";
import Features from "./components/Sections/Features/Features";
import Categories from "./components/Sections/Categories/Categories";
import Products from "./components/Sections/Products/Products";
import Articles from "./components/Sections/Articles/Articles";
import Reviews from "./components/Sections/Reviews/Reviews";
import Contact from "./components/Sections/Contact/Contact";
import Footer from "./components/Sections/Footer/Footer";

import "accordion-js/dist/accordion.min.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Categories />
        <Articles />
        <Reviews />
        <Contact />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
