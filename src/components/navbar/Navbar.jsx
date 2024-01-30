import { FaSearch } from "react-icons/fa";

const navLink = [
  { id: 1, title: "Vegan", path: "/" },
  { id: 2, title: "High-Protein", path: "/" },
  { id: 3, title: "High-Fiber", path: "/" },
  { id: 4, title: "Low-Fat", path: "/" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-center max-w-screen-xl container h-[10vh] bg-slate-600 mx-auto">
      <div className="flex items-center gap-10">
        <div className="">
          <h1>
            Oh <span>Yeah.</span>
          </h1>
        </div>
        <div className="flex items-center justify-between gap-4">
          {navLink.map((navMenu) => (
            <ul key={navMenu.id}>
              <li>{navMenu.title}</li>
            </ul>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <input type="text" placeholder="Search here..." />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
