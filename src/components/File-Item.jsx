import React, { useState } from "react";
import { Folder, Play } from "lucide-react";
import { HighlightText } from "./Person-Item";
import { Copy, ExternalLink } from "lucide-react";

const FileItem = ({ file, index, searchTerm }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(file.location);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleOpenNewTab = () => {
    window.open(file.location, "_blank", `${file.location}`);
  };

  return (
    <div
      className="flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors animate-in slide-in-from-left duration-300"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {getIcon(file)}

      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            <HighlightText text={file.name} highlight={searchTerm} />
          </h3>
          {file.fileCount && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
              {file.fileCount}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500 truncate">
          {file.location} • {file.time}
        </p>
      </div>
      <div className="flex items-center space-x-3 hover:opacity-100 opacity-0 transition-opacity">
        <button
          onClick={handleCopy}
          className="p-1 hover:bg-gray-200 rounded"
          title="Copy link"
        >
          <Copy size={16} />
        </button>
        {copied && (
          <span className="text-xs text-green-600 animate-fade-in">
            Link copied!
          </span>
        )}

        <button
          onClick={handleOpenNewTab}
          className="p-1 hover:bg-gray-200 rounded"
          title="Open in new tab"
        >
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default FileItem;

export const getIcon = (file) => {
  switch (file.type) {
    case "image":
      return (
        <div className="w-8 h-8 bg-gray-200 rounded border flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-400 rounded-sm" />
        </div>
      );
    case "video":
      return (
        <div className="w-8 h-8 bg-gray-100 rounded border flex items-center justify-center">
          <Play className="w-4 h-4 text-gray-600" />
        </div>
      );
    case "folder":
      return (
        <div className="w-8 h-8 flex items-center justify-center">
          <Folder className="w-6 h-6 text-gray-600" />
        </div>
      );
    default:
      return <div className="w-8 h-8 bg-gray-200 rounded border" />;
  }
};
