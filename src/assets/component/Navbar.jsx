export default function Navbar() {
  const links = [
    "All Categories",
    "Today Deals",
    "Electronics",
    "Clothings",
    "Computers",
    "Furnitures",
    "Mom & Baby",
    "Books & More",
  ];

  return (
    <nav className="bg-yellow-400 text-black">
      <div className="container mx-auto px-4">
        <ul className="flex overflow-x-auto whitespace-nowrap space-x-6 py-2">
          {links.map((link) => (
            <li
              key={link}
              className="font-semibold hover:underline cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
