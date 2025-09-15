import SettingsButton from "./Settings-Button";
import { Users, File } from "lucide-react";
import { useSearchContext } from "../hook/context";
const TabNavigation = ({ counts }) => {
  const { activeTab, setActiveTab } = useSearchContext();
  const tabs = [
    { id: "all", label: "All", count: counts.all },
    { id: "files", label: "Files", count: counts.files, icon: File },
    { id: "people", label: "People", count: counts.people, icon: Users },
  ];

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
      <div className="flex space-x-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-1 py-2 text-sm font-medium transition-colors relative ${
                isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {Icon && <Icon className="w-4 h-4" />}
              <span>{tab.label}</span>
              <span
                className={`text-xs bg-gray-100  px-1.5 py-1 rounded text-gray-400 ${
                  isActive ? "text-gray-200" : "text-gray-200"
                }`}
              >
                {tab.count}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      <SettingsButton />
    </div>
  );
};
export default TabNavigation;
