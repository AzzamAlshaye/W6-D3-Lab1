import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import PromoBanner from "./components/PromoBanner";

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
