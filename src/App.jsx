import { useState, useEffect } from "react";
import DesktopHeader from "./Components/DesktopHeader";
import MobileHeader from "./Components/MobileHeader";
import Home from "./Components/Home";
import ProductsSection from "./Components/Products/ProductsSection";
import CategoryBanner from "./Components/Categories/CategoryBanner";
import BestCeller from "./Components/BestCeller/BestCeller";
import CoffeeClub from "./Components/CoffeeClub";
import BlogsSection from "./Components/Blogs/BlogsSection";
import ContactUs from "./Components/ContactUs";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import products from "./Components/Products/data/products";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [cartProducts, setCartProducts] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [totalPrice, setTotalPrice] = useState("");

  // theme toggle
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // add / remove cart product
  function addToCart(id) {
    const mainProduct = products.find((products) => products.id === id);
    setCartProducts((prevItems) => [...prevItems, mainProduct]);
  }

  function removeCartProduct(id) {
    const mainProductIndex = products.findIndex(
      (products) => products.id === id,
    );
    const newCartProductList = cartProducts.splice((mainProductIndex, 1));
    setCartProducts(newCartProductList);
  }
  // Save cart products in localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
    const getTotalPrice = cartProducts.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);

    setTotalPrice(getTotalPrice.toLocaleString("en-US"));
  }, [cartProducts]);

  return (
    <>
      <DesktopHeader
        theme={theme}
        toggleTheme={toggleTheme}
        showText={false}
        products={cartProducts}
        totalPrice={totalPrice}
        onRemove={removeCartProduct}
      />
      <MobileHeader
        theme={theme}
        toggleTheme={toggleTheme}
        showText={true}
        products={cartProducts}
        totalPrice={totalPrice}
        onRemove={removeCartProduct}
      />
      <main className="sm:mb-36 mb-14">
        <Home />
        <ProductsSection onAdd={addToCart} />
        <CategoryBanner/>
        <BestCeller/>
        <CoffeeClub />
        <BlogsSection />
        <ContactUs />
        <Services />
      </main>
      <Footer />
    </>
  );
}
