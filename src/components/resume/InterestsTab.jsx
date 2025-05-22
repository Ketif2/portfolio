import React from 'react';
import { interestsData, softSkillsData } from '../../data/resumeData';
import SkillCircle from '../ui/SkillCircle';

const InterestsTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Intereses</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {interestsData.map((interest, index) => (
            <SkillCircle key={index} skill={interest} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Habilidades Blandas</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {softSkillsData.map((skill, index) => (
            <SkillCircle key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterestsTab;