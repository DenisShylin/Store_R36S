// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "accordion-js/dist/accordion.min.css";

// Components imports
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
import { ProductSchema } from "./components/schemas";

// Product data import
import { productData } from "./constants/productData";

// 404 Page Component
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
};

function App() {
  console.log("App component rendering");
  const isDevelopment = import.meta.env.MODE === "development";
  const basename = isDevelopment ? "/" : "/r32s/";
  console.log("Mode:", import.meta.env.MODE);
  console.log("Basename:", basename);
  console.log("Current URL:", window.location.href);

  return (
    <Router basename={basename}>
      <div className="app-container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                {/* Schema.org разметка для главной страницы */}
                <ProductSchema product={productData} />

                {/* Основные секции сайта */}
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
