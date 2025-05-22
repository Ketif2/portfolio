const SkillCircle = ({ skill }) => {
  return (
    <div className="flex flex-col items-center">
      <div 
        className="rounded-full bg-red-500 flex items-center justify-center text-white font-bold mb-2"
        style={{ 
          width: `${Math.max(60, skill.level)}px`, 
          height: `${Math.max(60, skill.level)}px`,
          fontSize: '12px'
        }}
      >
        {skill.level}%
      </div>
      <span className="text-sm text-center">{skill.name}</span>
    </div>
  );
};

export default SkillCircle;