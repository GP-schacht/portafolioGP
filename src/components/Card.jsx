export function Card({ srcImg, descripcion, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3 p-4 border border-gray-200 rounded-xl hover:-translate-y-1 hover:border-orange-400 active:scale-95 transition-all duration-150 no-underline bg-transparent"
    >
    
      {srcImg ? (
        <img
          src={srcImg}
          alt={descripcion}
          className="w-12 h-12 object-contain"
        />
      ) : (
        <div className="w-12 h-12 flex items-center justify-center text-gray-400">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      )}
      <span className="text-sm text-gray-700 text-center leading-snug">{descripcion}</span>
    </a>
  );
}