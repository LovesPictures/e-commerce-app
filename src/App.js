import './App.css';
import {Header} from "./components/Header/Header";
import {Banner} from "./components/Banner/Banner";
import {CategoryCards} from "./components/CategoryCards/CategoryCards";
import {BannerGrid} from "./components/BannerGrid/BannerGrid";
import {ProductCards} from "./components/ProductCards/ProductCards";
import {ProductFilter} from "./components/ProductFilter/ProductFilter";
import {ProductPromo} from "./components/ProductPromo/ProductPromo";
import {Collections} from "./components/Collections/Collections";
import {Newsletter} from "./components/Newsletter/Newsletter";
import {Contact} from "./components/Contact/Contact";
import {HeadedList} from "./components/HeadedList/HeadedList";
import {Payment} from "./components/Payment/Payment";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Banner/>
      <CategoryCards/>
      <BannerGrid />
      <ProductFilter/>
      <ProductCards/>
      <ProductPromo />
      <Collections/>      
      <Newsletter />
      <Contact />
      <HeadedList />
      <Payment />      
      <Footer /> 
    </div>
  );
}

export default App;
