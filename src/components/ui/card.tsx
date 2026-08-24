import React from "react";
import { cn } from "../../lib/utils";

export const Card = React.forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode }>(({ className, children }, ref) => {
  const defaultClassName = "rounded-lg border bg-white shadow-sm transition-colors duration-300 dark:bg-gray-900";
  const finalClassName = cn(defaultClassName, className);
  return <div ref={ref} className={finalClassName}>{children}</div>;
});

Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode }>(({ className, children }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)}>
    {children}
  </div>
));
CardHeader.displayName = "CardHeader";

export const CardContent = React.forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode }>(({ className, children }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)}>
    {children}
  </div>
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode }>(({ className, children }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)}>
    {children}
  </div>
));
CardFooter.displayName = "CardFooter";