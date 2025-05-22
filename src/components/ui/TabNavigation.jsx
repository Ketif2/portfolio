const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex space-x-1 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => onTabChange(index)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === index
                ? 'bg-red-500 text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;