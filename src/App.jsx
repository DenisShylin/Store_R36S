import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "accordion-js/dist/accordion.min.css";

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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        {/* Здесь можно добавить другие маршруты */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/products" element={<ProductsPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
