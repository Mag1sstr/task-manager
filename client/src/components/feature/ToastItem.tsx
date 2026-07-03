import { useEffect } from "react";
import type { IToastData, ToastType } from "./ToastContainer";
import { motion } from "motion/react";

interface IProps extends IToastData {
  setToastData: (
    data: IToastData[] | ((prev: IToastData[]) => IToastData[]),
  ) => void;
  delay?: number;
}
function ToastItem({ title, type, setToastData, id, delay = 3000 }: IProps) {
  const styleWithType: Record<ToastType, string> = {
    default: "border-gray-500",
    success: "border-green-500",
    error: "border-red-500",
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setToastData((prev) => prev.filter((el) => el.id !== id));
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, id, setToastData]);
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0, translateX: "100%" }}
      className={`p-10 bg-white rounded-md shadow-2xl border ${styleWithType[type]}`}
    >
      {title}
    </motion.div>
  );
}

export default ToastItem;
