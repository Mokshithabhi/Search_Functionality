import { Search, Loader2Icon } from "lucide-react";
import { useSearchContext } from "../hook/context";

const SearchHeader = () => {
  const { isLoading, searchTerm, setSearchTerm, setCollapsed, handleClear } =
    useSearchContext();

  return (
    <div className="flex items-center space-x-3 p-4 border-b border-gray-200">
      <div className="relative flex-1">
        {isLoading ? (
          <Loader2Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 animate-spin" />
        ) : (
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        )}

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCollapsed(false);
          }}
          placeholder="Search... "
          className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-0  focus:bg-none outline-none transition-all text-gray-900 placeholder-gray-500"
        />
        {searchTerm ? (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-600 hover:underline"
          >
            Clear
          </button>
        ) : (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-gray-500 text-sm border px-2 py-1 rounded-lg">
            <span className="w-5 h-5 flex items-center justify-center bg-gray-200 rounded mr-1">
              S
            </span>
            quick access
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchHeader;
