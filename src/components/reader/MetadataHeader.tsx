export const MetadataHeader = ({ meta }: { meta: any }) => {
  return (
    <header className="prose dark:prose-invert mb-8 p-6 bg-white dark:bg-gray-900/50 rounded-lg">
      <h2 className="font-amiri text-xl font-bold text-gray-900 dark:text-emerald-900 mb-2">{meta.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{meta.subtitle}</p>
      {meta.quranVerse && (
        <p className="mt-4 italic font-amiri text-gray-500 dark:text-gray-400" dir="rtl">
          {meta.quranVerse}
        </p>
      )}
    </header>
  );
};