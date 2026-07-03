import { createContext, useEffect, useState } from "react";
import ToastItem from "./ToastItem";
import { AnimatePresence } from "motion/react";
export type ToastType = "success" | "error" | "default";
interface IProps {
  children: React.ReactNode;
  delay?: number;
}
export const ToastContext = createContext(
  {} as {
    toastData: IToastData[];
    setToastData: (
      data: IToastData[] | ((prev: IToastData[]) => IToastData[]),
    ) => void;
  },
);
export interface IToastData {
  type: ToastType;
  title: string;
  id: number;
}
const ToastContainer = ({ children, delay = 3000 }: IProps) => {
  const [toastData, setToastData] = useState<IToastData[]>([]);
  console.log(toastData);

  return (
    <ToastContext.Provider value={{ toastData, setToastData }}>
      {children}
      <AnimatePresence>
        {toastData.length > 0 && (
          <div
            className={`fixed top-0 right-0 w-70 p-10 z-100 flex flex-col gap-2.5 `}
          >
            {toastData.map((item) => (
              <ToastItem
                key={item.id}
                setToastData={setToastData}
                {...item}
                delay={delay}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
};

export default ToastContainer;
