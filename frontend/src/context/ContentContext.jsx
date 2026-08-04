import { createContext, useEffect, useState } from "react";

const ContextContent = createContext();

export const ContextProvider = ({ children }) => {
  const [docs, setDocs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch("http://localhost:3000/documents");
        if (!response.ok) throw new Error("Failed to fetch content");

        const data = await response.json();
        setDocs(data);
      } catch (error) {
        console.error("Failed to fetch content: ", error);
      }
    };

    fetchDocuments();
  }, []);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await fetch("http://localhost:3000/years");
        if (!response.ok) throw new Error("Failed to fetch filters");

        const data = await response.json();
        setFilters(data);
      } catch (error) {
        console.error("Failed to fetch filters: ", error);
      }
    };

    fetchFilters();
  }, []);

  return (
    <ContextContent.Provider value={{ docs, filters }}>
      {children}
    </ContextContent.Provider>
  );
};

export default ContextContent;
