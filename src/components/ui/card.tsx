import { cn } from "@/lib/utils";

export const Card = React.forwardRef(({ className, children }, ref) => {
  const defaultClassName = "rounded-lg border bg-white shadow-sm transition-colors duration-300 dark:bg-gray-900";
  const finalClassName = cn(defaultClassName, className);
  return <div ref={ref} className={finalClassName}>{children}</div>;
});

Card.displayName = "Card";