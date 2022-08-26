import "./App.css";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { CategoryCards } from "./components/CategoryCards/CategoryCards";
// import { BannerGrid } from "./components/BannerGrid/BannerGrid";
import { ProductCards } from "./components/ProductCards/ProductCards";
// import { ProductFilter } from "./components/ProductFilter/ProductFilter";
import { ProductPromo } from "./components/ProductPromo/ProductPromo";
import { Trending } from "./components/Trending/Trending";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { MapContact } from "./components/MapContact/MapContact";
import { HeadedList } from "./components/HeadedList/HeadedList";
// import { Payment } from "./components/Payment/Payment";
// import { Footer } from "./components/Footer/Footer";

// put a with container around components - style in css
function App() {
  return (
    <div>
      <Home />
      <Header />
      <Banner />
      <div className="Site__width">
        <CategoryCards />
        {/* <BannerGrid /> */}
        {/* <ProductFilter /> */}
        <ProductCards />
        <ProductPromo />
        <Trending />
        <Newsletter />
        <MapContact />
      </div>
      <HeadedList />
      {/*<Payment /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
