import FileItem from "./File-Item";
import PersonItem from "./Person-Item";
import SkeletonList from "./skeletion";
import { filterData } from "../../utils/utility-functions";
import { isPerson } from "../../utils/utility-functions";
import { useSearchContext } from "../hook/context";

const ResultsContent = ({ data }) => {
  const { isLoading, activeTab, debouncedTerm } = useSearchContext();
  const filteredPeople = filterData(data.people, debouncedTerm);
  const filteredFiles = filterData(data.files, debouncedTerm);
  const allResults = [...filteredPeople, ...filteredFiles];

  const renderResults = () => {
    switch (activeTab) {
      case "people":
        if (filteredPeople.length === 0) {
          return <p className="p-4 text-gray-500">{debouncedTerm} not found</p>;
        }
        return filteredPeople.map((person, index) => (
          <PersonItem
            key={person.id}
            person={person}
            index={index}
            searchTerm={debouncedTerm}
          />
        ));
      case "files":
        if (filteredFiles.length === 0) {
          return <p className="p-4 text-gray-500">{debouncedTerm} not found</p>;
        }
        return filteredFiles.map((file, index) => (
          <FileItem
            key={file.id}
            file={file}
            index={index}
            searchTerm={debouncedTerm}
          />
        ));
      default:
        if (allResults.length === 0) {
          return <p className="p-4 text-gray-500">{debouncedTerm} not found</p>;
        }
        return allResults.map((item, index) =>
          isPerson(item) ? (
            <PersonItem
              key={`person-${item.id}`}
              person={item}
              index={index}
              searchTerm={debouncedTerm}
            />
          ) : (
            <FileItem
              key={`file-${item.id}`}
              file={item}
              index={index}
              searchTerm={debouncedTerm}
            />
          )
        );
    }
  };

  if (isLoading) {
    return <SkeletonList />;
  }

  return <div className="divide-y divide-gray-100">{renderResults()}</div>;
};
export default ResultsContent;
