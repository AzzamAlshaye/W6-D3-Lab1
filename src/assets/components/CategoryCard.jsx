export default function CategoryCard({ name, img, items }) {
  return (
    <div className=" bg-[#f3f0f3] rounded-lg flex justify-evenly items-center">
      <img src={img} alt={name} className="w-28 h-32 object-contain" />
      <div className="p-4">
        <h5 className="font-semibold mb-2">{name}</h5>
        <ul className="text-sm text-gray-600 space-y-1">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
