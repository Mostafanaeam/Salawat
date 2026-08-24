import { ReactNode } from "react";

export const Toast = ({ title, description, variant = "default" }: { title: string; description: string; variant?: "default" | "destructive" }) => {
  const id = `toast-${Math.random().toString(36).slice(2, 9)}`;

  const handleClose = () => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.style.transition = "opacity 0.3s ease-out";
      element.style.opacity = "0";
      setTimeout(() => element.remove(), 300);
    }
  };

  React.useEffect(() => {
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const container = document.getElementById("toast-container") as HTMLDivElement | null;
    if (!container) {
      const newContainer = document.createElement("div");
      newContainer.id = "toast-container";
      newContainer.className = "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2";
      document.body.appendChild(newContainer);
      container = newContainer;
    }

    const toast = document.createElement("div");
    toast.id = id;
    toast.className = `p-4 rounded-lg max-w-md text-center text-sm ${
      variant === "destructive"
        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
        : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-100"
    } border-t-4 border-emerald-500 shadow-lg animate-in fade-in-0 fade-out-0 transition-opacity duration-500";
    toast.setAttribute("role", "alert");
    toast.innerHTML = `
      <span className="font-medium">${title}</span>
      <span className="block">${description}</span>
    `;
    container.appendChild(toast);

    setTimeout(handleClose, 3000);
  }, [title, description, variant]);

  return null;
};