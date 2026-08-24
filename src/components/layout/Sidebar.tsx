import { ThemeToggle } from "../ui/ThemeToggle";

export const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-full w-64 shadow-lg overflow-y-auto transform translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out bg-white dark:bg-gray-900">
      <div className="h-14 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between px-4">
        <h2 className="font-amiri text-xl font-bold text-gray-900 dark:text-emerald-900">التقسيم</h2>
        <ThemeToggle />
      </div>
      <nav className="overflow-y-auto h-full">
        <ul className="space-y-1 p-2">
          <li>
            <button className="w-full rounded-lg border border-gray-200 bg-white dark:bg-gray-900 text-left rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:data-[state=dark]:bg-emerald-900/20 transition-colors py-2 px-3 rounded-lg text-sm font-medium hover:text-emerald-800 hover:data-[state=dark]:text-emerald-100 active:bg-gray-100/10 active:data-[state=dark]:bg-emerald-900/20">
              مقدمة الكتاب
            </button>
          </li>
          <li>
            <button className="w-full rounded-lg border border-gray-200 bg-white dark:bg-gray-900 text-left rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:data-[state=dark]:bg-emerald-900/20 transition-colors py-2 px-3 rounded-lg text-sm font-medium hover:text-emerald-800 hover:data-[state=dark]:text-emerald-100 active:bg-gray-100/10 active:data-[state=dark]:bg-emerald-900/20">
              أحاديث الفضل
            </button>
          </li>
          <li>
            <button className="w-full rounded-lg border border-gray-200 bg-white dark:bg-gray-900 text-left rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:data-[state=dark]:bg-emerald-900/20 transition-colors py-2 px-3 rounded-lg text-sm font-medium hover:text-emerald-800 hover:data-[state=dark]:text-emerald-100 active:bg-gray-100/10 active:data-[state=dark]:bg-emerald-900/20">
              الصلوات المأثورة
            </button>
          </li>
          <li>
            <button className="w-full rounded-lg border border-gray-200 bg-white dark:bg-gray-900 text-left rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:data-[state=dark]:bg-emerald-900/20 transition-colors py-2 px-3 rounded-lg text-sm font-medium hover:text-emerald-800 hover:data-[state=dark]:text-emerald-100 active:bg-gray-100/10 active:data-[state=dark]:bg-emerald-900/20">
              صلوات الصالحين
            </button>
          </li>
          <li>
            <button className="w-full rounded-lg border border-gray-200 bg-white dark:bg-gray-900 text-left rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:data-[state=dark]:bg-emerald-900/20 transition-colors py-2 px-3 rounded-lg text-sm font-medium hover:text-emerald-800 hover:data-[state=dark]:text-emerald-100 active:bg-gray-100/10 active:data-[state=dark]:bg-emerald-900/20">
              القصائد الشعرية
            </button>
          </li>
        </ul>
      </nav>
    </nav>
  );
};