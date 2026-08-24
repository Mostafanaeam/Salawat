export const FontResizer = ({ fontSize, onIncrease, onDecrease }: { fontSize: number; onIncrease: () => void; onDecrease: () => void }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <button
        onClick={onDecrease}
        className="p-1.5 rounded-md bg-gray-100 dark:bg-gray-900 border border-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
        disabled={fontSize <= 14}
        aria-label="Decrease font size"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path className="stroke-2" d="M18 15l-6-6L6 21l6-6Z" />
        </svg>
      </button>
      <span className="relative flex-1">
        <span className="absolute left-1/2 -translateX-1/2 text-gray-400">A</span>
        <span className="text-gray-600 font-medium">{fontSize}px</span>
      </span>
      <button
        onClick={onIncrease}
        className="p-1.5 rounded-md bg-gray-100 dark:bg-gray-900 border border-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
        disabled={fontSize >= 20}
        aria-label="Increase font size"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path className="stroke-2" d="M6 9l6 6l6-6" />
        </svg>
      </button>
    </div>
  );
};