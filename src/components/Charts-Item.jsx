import Wrapper from "../Wrapper";
import { HighlightText } from "./Person-Item";
const ChatsItem = ({ chat, index, searchTerm }) => {
  return (
    <Wrapper index={index}>
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-medium">
        {chat.name[0]}
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-medium truncate">
          <HighlightText text={chat.name} highlight={searchTerm} />
        </p>
        <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
      </div>

      <div className="flex flex-col items-end">
        <p className="text-xs text-gray-400">{chat.time}</p>
        {chat.unreadCount > 0 && (
          <span className="mt-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
            {chat.unreadCount}
          </span>
        )}
      </div>
    </Wrapper>
  );
};
export default ChatsItem;
