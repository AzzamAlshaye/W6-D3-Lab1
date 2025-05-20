import CategoryCard from "./CategoryCard";

const data = [
  {
    name: "Electronics",
    img: "https://m.media-amazon.com/images/I/81NLMdXhvrL._AC_SL1500_.jpg",
    items: [
      "TV Televisions",
      "Air Conditioners",
      "Washing Machines",
      "Audio & Theaters",
      "Office Electronics",
    ],
  },
  {
    name: "Clothings",
    img: "https://m.media-amazon.com/images/I/51wDsZxtTLL._AC_SX569_.jpg",
    items: ["Women", "Men", "Bags & Backpacks", "Accessories"],
  },
  {
    name: "Computers",
    img: "https://m.media-amazon.com/images/I/71xG55qYjfL._AC_SL1500_.jpg",
    items: [
      "Desktop PC",
      "Laptop",
      "PC Gaming",
      "Storage & Memory",
      "PC Components",
    ],
  },
  {
    name: "Home & Kitchen",
    img: "https://m.media-amazon.com/images/I/915kp3br1TL._AC_SL1500_.jpg",
    items: [
      "Furnitures",
      "Decor",
      "Cookwares",
      "Utensils & Gadgets",
      "Garden Tools",
    ],
  },
  {
    name: "Healthy & Beauty",
    img: "https://m.media-amazon.com/images/I/61xHTzEr8SL._SL1500_.jpg",
    items: [
      "Makeup",
      "Skin Care",
      "Hair Care",
      "Tools & Equipments",
      "Perfumes",
    ],
  },
  {
    name: "Jewelry & Watch",
    img: "https://m.media-amazon.com/images/I/61iEiiJdITL.__AC_SX300_SY300_QL70_ML2_.jpg",
    items: ["Pendant", "Necklace", "Watch", "Bracelets", "Accessories"],
  },
];

export default function Categories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-4">
      {data.map((cat) => (
        <CategoryCard key={cat.name} {...cat} />
      ))}
    </div>
  );
}
