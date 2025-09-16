import React from "react";

const ListItem = ({ list, index, searchTerm }) => {
  return (
    <div
      className="flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors animate-in slide-in-from-left duration-300"
      style={{ animationDelay: `${index * 50}ms` }}
    ></div>
  );
};

export default ListItem;
