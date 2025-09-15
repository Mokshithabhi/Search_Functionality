import React, { useState } from "react";
import { settingsItems } from "../../utils/utility-functions";
import { useSearchContext } from "../hook/context";

const SettingsDropdown = () => {
  const { settings, toggleSetting } = useSearchContext();
  return (
    <div className="px-3 py-2">
      {settingsItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.key}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center space-x-3">
              <Icon
                className={`w-4 h-4 ${
                  settings[item.key] ? "text-gray-700" : "text-gray-400"
                }`}
              />
              <span
                className={`text-sm ${
                  settings[item.key] ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            </div>
            <button
              onClick={() => toggleSetting(item.key)}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                settings[item.key] ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                  settings[item.key] ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default SettingsDropdown;
