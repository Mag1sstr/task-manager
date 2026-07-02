import { useContext } from "react";
import { ToastContext } from "./ToastContainer";
export const useToast = () => {
  const { setShowToast, setValue } = useContext(ToastContext);
  const toast = {
    success: (v?: string) => {
      setShowToast("success");
      setValue(v ?? "");
    },
    error: (v?: string) => {
      setShowToast("error");
      setValue(v ?? "");
    },
    default: (v?: string) => {
      setShowToast("default");
      setValue(v ?? "");
    },
  };
  return toast;
};
