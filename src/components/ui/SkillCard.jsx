const SkillCard = ({ skill }) => {
  return (
    <div className="flex-shrink-0 w-32 md:w-40">
      <div className="group bg-white/80 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl p-4 md:p-6 transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-red-500/50 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/10 mx-2 backdrop-blur-sm">
        
        <div className="text-center mb-3">
          <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gray-100 dark:bg-gray-700 group-hover:bg-red-500 rounded-xl flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
            {skill.icon}
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-gray-900 dark:text-white font-medium text-xs md:text-sm group-hover:text-red-500 transition-colors duration-300 leading-tight">
            {skill.name}
          </h3>
        </div>
        
        <div className="flex justify-center mt-2">
          <div className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;