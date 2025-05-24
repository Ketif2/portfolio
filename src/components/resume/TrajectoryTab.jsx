import { trajectoryData } from '../../data/Data';

const TrajectoryTab = () => {
  return (
    <div className="space-y-6 dark:text-gray-100">
      <h3 className="text-xl font-bold mb-4">Trayectoria Estudiantil & Profesional</h3>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-red-500"></div>
        
        {trajectoryData.map((item, index) => (
          <div key={index} className="relative flex items-center mb-8">
            <div className="absolute left-2 w-4 h-4 bg-red-800 rounded-full border-4 border-white dark:border-red-500"></div>
            
            <div className="ml-12">
              <div className="text-sm text-red-500 font-semibold">{item.year}</div>
              <div className="text-lg font-bold">{item.title}</div>
              <div className="text-gray-600 dark:text-gray-400">{item.company}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrajectoryTab;