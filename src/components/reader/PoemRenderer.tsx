import { useFontSize } from "../hooks/useFontSize";

export const PoemRenderer = ({ verses }: { verses: { front: string; back: string }[] }) => {
  const { fontSize } = useFontSize();

  return (
    <div className="prose dark:prose-invert max-w-none mx-auto space-y-6">
      {verses.map((verse, index) => (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="font-amiri text-lg text-gray-800 dark:text-gray-100 leading-relaxed">{verse.front}</font-size>, {verse.front}</p>
          </div>
          <div>
            <p className="font-amiri text-lg text-gray-800 dark:text-gray-100 leading-relaxed">{verse.back}</p>
          </div>
        </div>
      ))}
    </div>
  );
};