import { useEffect, useState } from "react";
import teachers from "../assets/teachers";

function Search({ onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchName = async () => {
      const trimmed = query.trim().toLowerCase();

      if (trimmed.length < 2) {
        setResults([]);
        setShowDropdown(false);
        return;
      }

      try {
        const filtered = teachers
          .filter((name) => name.toLowerCase().includes(trimmed))
          .slice(0, 5); // limit results to top 5

        setResults(filtered);
        setShowDropdown(filtered.length > 0);
      } catch (e) {
        console.error("Error fetching search results: ", e);
      }
    };

    const timeoutId = setTimeout(fetchName, 300); // debounce
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSelect = (name) => {
    setQuery(name);
    setResults([]);
    setShowDropdown(false);
    if (onSelect) {
      onSelect(name);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <input
          className="bg-white px-2 py-1 focus:outline-none border border-black rounded w-3xs selection:bg-dark-orange"
          placeholder="Enter teacher name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {showDropdown && results.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-black overflow-y-auto max-h-60">
            {results.map((item) => (
              <li
                key={item}
                onClick={() => handleSelect(item)}
                className="p-2 cursor-pointer hover:bg-light-orange/30"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}

export default Search;
