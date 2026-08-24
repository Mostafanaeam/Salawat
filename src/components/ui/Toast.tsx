import { createContext, useContext } from "react";

interface ToastContextType {
  toast: (options: { title: string; description: string; variant?: "default" | "destructive" }) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const toast = (options: { title: string; description: string; variant?: "default" | "destructive" }) => {
    const id = `toast-${Math.random().toString(36).slice(2, 9)}`;
    const container = document.getElementById("toast-container") as HTMLDivElement;
    if (!container) return;

    const toastEl = document.createElement("div");
    toastEl.id = id;
    toastEl.className = `p-4 rounded-lg max-w-md text-center text-sm ${
      options.variant === "destructive"
        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
        : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-100"
    } border-t-4 border-emerald-500 shadow-lg animate-in fade-in-0 fade-out-0 transition-opacity duration-500`;
    toastEl.setAttribute("role", "alert");
    toastEl.innerHTML = `
      <span class="font-medium">${options.title}</span>
      <span class="block">${options.description}</span>
    `;
    container.appendChild(toastEl);

    setTimeout(() => {
      toastEl.style.transition = "opacity 0.3s ease-out";
      toastEl.style.opacity = "0";
      setTimeout(() => toastEl.remove(), 300);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div id="toast-container" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 items-center" />
    </ToastContext.Provider>
  );
};

export const Toast = ({ title, description, variant = "default" }: { title: string; description: string; variant?: "default" | "destructive" }) => {
  return (
    <div
      className={`p-4 rounded-lg max-w-md text-center text-sm ${
        variant === "destructive"
          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
          : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-100"
      } border-t-4 border-emerald-500 shadow-lg animate-in fade-in-0 fade-out-0 transition-opacity duration-500`}
      role="alert"
    >
      <span className="font-medium">{title}</span>
      <span className="block">{description}</span>
    </div>
  );
};