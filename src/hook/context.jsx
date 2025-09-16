import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [isCollapsed, setCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    all: true,
    files: true,
    people: true,
    chats: false,
    lists: false,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);
    }

    const debounceHandler = setTimeout(() => {
      setDebouncedTerm(searchTerm.toLowerCase());
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [searchTerm]);

  const handleClear = () => {
    setSearchTerm("");
    setCollapsed(true);
    setActiveTab("all");
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        debouncedTerm,
        activeTab,
        setActiveTab,
        isCollapsed,
        setCollapsed,
        isLoading,
        handleClear,
        settings,
        toggleSetting,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
