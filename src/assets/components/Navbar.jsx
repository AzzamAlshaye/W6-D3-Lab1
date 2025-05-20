import { IoIosMenu } from "react-icons/io";

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
    <nav className="bg-yellow-400 text-black flex justify-end lg:justify-center items-center  ">
      <IoIosMenu className="text-4xl   lg:hidden" />
      <ul className="flex  whitespace-nowrap space-x-6 lg:py-2 py-8 justify-center">
        {links.map((link) => (
          <li
            key={link}
            className="font-semibold hover:underline cursor-pointer lg:block hidden"
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}
