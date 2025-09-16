import React, { useState, useMemo } from "react";
import SearchHeader from "./Search-Header";
import TabNavigation from "./Tab-Navigations";

import ResultsContent from "./Resultant-Search";
import { mockData } from "../../utils/mockdata";
import { filterData } from "../../utils/utility-functions";
import { useSearchContext } from "../hook/context";

const SearchInterface = () => {
  const { debouncedTerm, isCollapsed } = useSearchContext();
  const [data] = useState(mockData);

  const getCounts = useMemo(() => {
    const filteredPeople = filterData(data.people, debouncedTerm);
    const filteredFiles = filterData(data.files, debouncedTerm);
    const filteredChats = filterData(data.chats, debouncedTerm);
    const filteredLists = filterData(data.lists, debouncedTerm);

    return {
      all: filteredPeople.length + filteredFiles.length,

      people: filteredPeople.length,
      files: filteredFiles.length,
      chats: filteredChats.length,
      lists: filteredLists.length,
    };
  }, [debouncedTerm, data]);

  return (
    <div className=" max-w-lg mx-auto my-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <SearchHeader />

        <div
          className={`transition-all duration-500 ease-in-out  ${
            isCollapsed ? "max-h-0" : "min-h-64 max-h-96 overflow-y-auto"
          }`}
        >
          <TabNavigation counts={getCounts} />
          <ResultsContent data={data} />
        </div>
      </div>
    </div>
  );
};

export default SearchInterface;
