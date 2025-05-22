const CertificationCard = ({ certification }) => {
  return (
    <a 
      href={certification.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group hover:transform hover:scale-105 transition-transform duration-200"
    >
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
        <img 
          src={certification.image} 
          alt={certification.title}
          className="w-full h-32 object-cover rounded mb-3"
        />
        <h4 className="text-sm font-semibold group-hover:text-red-500 transition-colors">
          {certification.title}
        </h4>
      </div>
    </a>
  );
};

export default CertificationCard;