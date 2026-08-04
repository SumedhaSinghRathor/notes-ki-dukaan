export function highlightMatch(text = "", query = "") {
  const safeText = String(text);

  if (!query) return safeText;

  const regex = new RegExp(`(${query})`, "gi");

  return safeText.split(regex).map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="bg-yellow-300 text-black">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
