import { useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { SearchContext } from "../context/SearchContext";

function Navbar() {
  const { search, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const value = params.get("query");
    if (value) setSearch(value);
  }, [setSearch]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    const params = new URLSearchParams();
    if (value) params.set("query", value);
    navigate(`/home?${params.toString()}`);
  };

  return (
    <ul className="navbar bg-black text-white flex justify-between items-center px-7.5 py-2 gap-8">
      <Link to="/home" className="shrink-0 focus:outline-none">
        <li className="logo flex items-center w-fit gap-2">
          <div className="size-12">
            <img src={logo} className="" alt="" />
          </div>
          <p className="font-medium leading-5 text-lg">
            NOTES KI <br /> <span className="tracking-wide">DUKAAN</span>
          </p>
        </li>
      </Link>
      <li className="search w-full grow">
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
          className="font-bold focus:outline-none text-black rounded-2xl bg-dark-orange px-6 py-0.5 w-full"
        />
      </li>
      <Link to="/user">
        <li className="pfp size-10 rounded-lg bg-white shrink-0 flex justify-center items-end">
          <i className="bx bxs-user text-black text-4xl" />
        </li>
      </Link>
    </ul>
  );
}

export default Navbar;
