import { certificationsData } from '../../data/resumeData';
import CertificationCard from '../ui/CertificationCard';

const CertificationsTab = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold mb-4">Certificaciones</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert, index) => (
          <CertificationCard key={index} certification={cert} />
        ))}
      </div>
    </div>
  );
};

export default CertificationsTab;