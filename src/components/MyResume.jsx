import React, { useState } from 'react';
import TabNavigation from './ui/TabNavigation';
import TrajectoryTab from './resume/TrajectoryTab';
import InterestsTab from './resume/InterestsTab';
import CertificationsTab from './resume/CertificationsTab';

const MyResume = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Trayectoria', component: TrajectoryTab },
    { label: 'Intereses', component: InterestsTab },
    { label: 'Certificaciones', component: CertificationsTab }
  ];

  const ActiveComponent = tabs[activeTab].component;

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Resume</h2>
        
        <TabNavigation 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 min-h-96">
          <ActiveComponent />
        </div>

        {/* Tab Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {tabs.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeTab === index ? 'bg-green-500' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyResume;