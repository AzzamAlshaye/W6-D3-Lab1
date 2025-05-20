import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Wooden Minimalistic Chairs",
    subtitle: "Sale up to 40% Off",
    img: "https://m.media-amazon.com/images/I/81S7K3d97vL._AC_SL1500_.jpg",
  },
  {
    title: "Cozy Lounge Chairs",
    subtitle: "New Arrivals",
    img: "https://m.media-amazon.com/images/I/91aTEA-RlTL._AC_SL1500_.jpg",
  },
  {
    title: "Modern Office Chairs",
    subtitle: "Up to 30% off",
    img: "https://m.media-amazon.com/images/I/61YLNTAvBzL._AC_SL1500_.jpg",
  },
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((idx + slides.length - 1) % slides.length);
  const next = () => setIdx((idx + 1) % slides.length);

  return (
    <div className="container mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Main carousel */}
      <div className="relative col-span-1 md:col-span-2 h-64 md:h-96 overflow-hidden rounded-lg">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-6 top-1/3 max-w-xs text-white">
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className="mt-2">{s.subtitle}</p>
              <button className="mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded">
                Shop Now
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Small promo on the side */}
      <div className="h-64 md:h-96 border rounded-lg overflow-hidden flex flex-col">
        <img
          src="https://m.media-amazon.com/images/I/71GX5QGOKsL._AC_SY550_.jpg"
          alt="T-Shirts"
          className="w-full h-2/3 object-cover"
        />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h4 className="font-semibold">Pack 5 T-Shirts for Summer</h4>
            <p className="mt-1 text-gray-600">
              Starting at <span className="text-red-500">$99.99</span>
            </p>
          </div>
          <button className="mt-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded self-start">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
