import { useContext } from "react";
import { ToastContext } from "./ToastContainer";
export const useToast = () => {
  const { setToastData } = useContext(ToastContext);
  const toast = {
    success: (v?: string) => {
      setToastData((prev) => [
        ...prev,
        { id: Date.now(), title: v || "", type: "success" },
      ]);
    },
    error: (v?: string) => {
      setToastData((prev) => [
        ...prev,
        { id: Date.now(), title: v || "", type: "error" },
      ]);
    },
    default: (v?: string) => {
      setToastData((prev) => [
        ...prev,
        { id: Date.now(), title: v || "", type: "default" },
      ]);
    },
  };
  return toast;
};
