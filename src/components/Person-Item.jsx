import Wrapper from "../Wrapper";

const PersonItem = ({ person, index, searchTerm }) => {
  return (
    <>
      <Wrapper index={index}>
        <div className="relative">
          <img
            src={person.avatar}
            alt={person.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div
            className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-white ${
              person.statusColor === "red" ? "bg-red-500" : "bg-yellow-500"
            }`}
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            <HighlightText text={person.name} highlight={searchTerm} />
          </h3>
          <p className="text-xs text-gray-500 truncate">{person.status}</p>
        </div>
      </Wrapper>
    </>
  );
};
export default PersonItem;

export const HighlightText = ({ text, highlight }) => {
  if (!highlight) return text;
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) =>
    regex.test(part) ? (
      <mark key={index} className="bg-yellow-200">
        {part}
      </mark>
    ) : (
      part
    )
  );
};
