"use client";
import { useFilters } from "../../hooks/useFilters";
import { setStatusType } from "../../store/slices/filterSlice";
import { useAppDispatch } from "../../store/store";
import type { StatusType } from "../../types";
interface IProps {
  count: number;
  type: StatusType | null;
}
function StatusItem({ count, type }: IProps) {
  const dispatch = useAppDispatch();
  const { taskStatus } = useFilters();
  return (
    <li
      onClick={() => dispatch(setStatusType(type))}
      className={`flex-1 py-6.5 px-4.5 rounded-[10px] flex items-center gap-4.5 shadow-[0px_4px_8px_0px_#0B1F4D1A] ${taskStatus === type && "outline-2 outline-blue-500"}`}
    >
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="58" height="58" rx="10" fill="#F03D3D" />
        <path
          d="M35.0208 22.2929C35.4113 21.9024 36.0445 21.9024 36.435 22.2929C36.8255 22.6834 36.8255 23.3166 36.435 23.7071L30.7781 29.364L36.435 35.0208C36.8255 35.4113 36.8255 36.0445 36.435 36.435C36.0445 36.8255 35.4113 36.8255 35.0208 36.435L29.3639 30.7782L23.7071 36.435C23.701 36.4411 23.6948 36.4471 23.6886 36.453C23.2969 36.8254 22.6773 36.8194 22.2929 36.435C22 36.1421 21.9268 35.7127 22.0732 35.3516C22.122 35.2312 22.1953 35.1184 22.2929 35.0208L27.9497 29.364L22.2929 23.7072C21.9024 23.3166 21.9024 22.6835 22.2929 22.2929C22.6834 21.9024 23.3166 21.9024 23.7071 22.2929L29.3639 27.9497L35.0208 22.2929Z"
          fill="white"
        />
      </svg>

      <p className="text-[14px] text-[#858FA6]">
        <strong className="text-[42px]">{count}</strong> errors
      </p>
    </li>
  );
}
export default StatusItem;
