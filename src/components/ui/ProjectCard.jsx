const ProjectCard = ({ project, isVisible }) => {
  return (
    <div 
      className={`group transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      }`}
    >
      <div className="bg-white/80 dark:bg-gray-800/90 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 dark:border-gray-700 hover:border-red-500/50 group-hover:scale-105 group-hover:-translate-y-2 backdrop-blur-sm">
        
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 h-56">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {project.category}
          </div>
        </div>

        <div className="p-5 space-y-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {project.credentials && (
            <p className="text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded border-l-4 border-red-500">
              <strong>Credenciales:</strong> {project.credentials}
            </p>
          )}

          {project.note && (
            <p className="text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded border-l-4 border-red-500">
              <strong>Nota:</strong> {project.note}
            </p>
          )}

          {project.prototypeNote && (
            <p className="text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded border-l-4 border-red-500">
              <strong>Prototipo:</strong> {project.prototypeNote}
            </p>
          )}

          {project.freelanceNote && (
            <p className="text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded border-l-4 border-red-500">
              <strong>Freelance:</strong> {project.freelanceNote}
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm font-medium"
            >
              <div className="flex space-x-3 p-2 border-r-8 border-l-8 border-red-500/30 border-1 rounded-full px-6">
                <svg className="w-4 h-4 m-0.5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </div>
            </a>

            {project.linkedinUrl ? (
              <a
                href={project.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                <span>LinkedIn Post</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            ) : (project.liveUrl || project.prototypeUrl) ? (
              <a
                href={project.prototypeUrl || project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                <span>Ver Demo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;