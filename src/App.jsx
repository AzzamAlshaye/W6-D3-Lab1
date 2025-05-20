import Navbar from "./assets/components/Navbar";
import HeroSection from "./assets/components/HeroSection";
import Categories from "./assets/components/Categories";
import PromoBanner from "./assets/components/PromoBanner";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroSection />
      <div className="container mx-auto px-4">
        <h2 className="mt-8 text-xl font-semibold">
          Top Categories Of The Month
        </h2>
        <Categories />
        <PromoBanner />
      </div>
    </div>
  );
}

export default App;
