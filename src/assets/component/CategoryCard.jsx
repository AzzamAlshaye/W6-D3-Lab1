export default function CategoryCard({ name, img, items }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <img src={img} alt={name} className="w-full h-32 object-cover" />
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
