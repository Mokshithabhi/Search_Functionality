import FileItem from "./File-Item";
import PersonItem from "./Person-Item";
import SkeletonList from "./skeletion";
import { filterData, singularMap } from "../../utils/utility-functions";
import { isPerson } from "../../utils/utility-functions";
import { useSearchContext } from "../hook/context";
import ChatsItem from "./Charts-Item";
import ListItem from "./List-Item";

const ResultsContent = ({ data }) => {
  const { isLoading, activeTab, debouncedTerm } = useSearchContext();
  const filteredPeople = filterData(data.people, debouncedTerm);
  const filteredFiles = filterData(data.files, debouncedTerm);
  const filteredChats = filterData(data.chats, debouncedTerm);
  const filteredLists = filterData(data.lists, debouncedTerm);
  const allResults = [...filteredPeople, ...filteredFiles];
  const tabConfig = {
    people: {
      data: filteredPeople,
      component: PersonItem,
      empty: "No people found",
    },
    files: {
      data: filteredFiles,
      component: FileItem,
      empty: "No files available",
    },
    chats: {
      data: filteredChats,
      component: ChatsItem,
      empty: "No chats available",
    },
    lists: {
      data: filteredLists,
      component: ListItem,
      empty: "No lists available",
    },
    all: {
      data: allResults,
      component: null,
      empty: "No results found",
    },
  };

  const renderResults = () => {
    const config = tabConfig[activeTab] || tabConfig.all;
    const { data, component: Component, empty } = config;

    if (activeTab === "all") {
      if (data.length === 0) {
        return <p className="p-4 text-gray-500">{empty}</p>;
      }
      return data.map((item, index) => {
        if (isPerson(item)) {
          return (
            <PersonItem
              key={`person-${item.id}`}
              person={item}
              index={index}
              searchTerm={debouncedTerm}
            />
          );
        } else {
          return (
            <FileItem
              key={`file-${item.id}`}
              file={item}
              index={index}
              searchTerm={debouncedTerm}
            />
          );
        }
      });
    }

    if (data.length === 0) {
      return (
        <p className="p-4 text-gray-500 flex items-center justify-center">
          {debouncedTerm ? `${debouncedTerm} not found` : empty}
        </p>
      );
    }

    return data.map((item, index) => (
      <Component
        key={item.id}
        {...{ [singularMap[activeTab]]: item }}
        index={index}
        searchTerm={debouncedTerm}
      />
    ));
  };

  if (isLoading) {
    return <SkeletonList />;
  }

  return <div className="divide-y divide-gray-100">{renderResults()}</div>;
};
export default ResultsContent;
