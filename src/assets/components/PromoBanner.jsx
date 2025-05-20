export default function PromoBanner() {
  return (
    <div className="mt-8 border rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-3">
      <div className="p-8 md:col-span-2 flex flex-col justify-center">
        <h3 className="text-2xl font-bold">
          Bose Bluetooth Wireless Headphones
        </h3>
        <p className="mt-2 text-gray-600">
          Crisp powerful sound from the best sounding wireless headphone in its
          class
        </p>
        <div className="mt-4 flex items-center space-x-4">
          <span className="line-through text-gray-400">$260.50</span>
          <span className="text-2xl font-bold text-green-600">$219.05</span>
        </div>
        <button className="mt-6 px-5 py-2 bg-yellow-400 text-black font-semibold rounded self-start">
          Shop Now
        </button>
      </div>
      <div className="h-48 md:h-auto overflow-hidden">
        <img
          src="https://m.media-amazon.com/images/I/51f7KKP25PL._AC_SL1000_.jpg"
          alt="Headphones"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
