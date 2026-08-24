export const HadithList = ({ hadiths }: { hadiths: string[] }) => {
  return (
    <div className="prose dark:prose-invert space-y-4">
      {hadiths.map((hadith, index) => (
        <div key={index} className="prose prose-invert rounded-lg p-4 bg-white dark:bg-gray-900/50">
          <p className="font-amiri text-base text-gray-800 dark:text-gray-100">{hadith}</p>
        </div>
      ))}
    </div>
  );
};