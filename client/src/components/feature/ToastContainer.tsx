import { createContext, useEffect, useState } from "react";
type ToastType = "success" | "error" | "default";
interface IProps {
  children: React.ReactNode;
  delay?: number;
}
export const ToastContext = createContext(
  {} as {
    showToast: ToastType | null;
    setShowToast: (type: ToastType | null) => void;
    setValue: (s: string) => void;
  },
);
const ToastContainer = ({ children, delay = 3000 }: IProps) => {
  const [value, setValue] = useState("");
  const [showToast, setShowToast] = useState<ToastType | null>(null);

  const styleWithType: Record<ToastType, string> = {
    default: "border-gray-500",
    success: "border-green-500",
    error: "border-red-500",
  };

  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(null);
    }, delay);
    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ setShowToast, showToast, setValue }}>
      {children}

      {showToast && (
        <div
          className={`fixed top-0 right-0 w-70 p-10 z-100 bg-white shadow-2xl border ${styleWithType[showToast]}`}
        >
          {value}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export default ToastContainer;
