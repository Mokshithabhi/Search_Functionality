import React, { useState } from "react";
import { Settings } from "lucide-react";
import SettingsDropdown from "./Settings-Dropdown";

const SettingsButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Settings className="w-4 h-4" />
      </button>

      {showDropdown && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowDropdown(false)}
          />
          <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20 animate-in slide-in-from-top-2 duration-200">
            <SettingsDropdown />
          </div>
        </>
      )}
    </div>
  );
};
export default SettingsButton;
