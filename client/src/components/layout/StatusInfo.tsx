import { useFilters } from "../../hooks/useFilters";
import { useGetTasksQuery } from "../../store/api";
import { setStatusType } from "../../store/slices/filterSlice";
import { useAppDispatch } from "../../store/store";
import type { ITask, StatusType } from "../../types";
import StatusItem from "./StatusItem";

function StatusInfo() {
  const { data } = useGetTasksQuery({});
  const { taskStatus } = useFilters();
  const dispatch = useAppDispatch();

  const info = (data ?? []).reduce<Record<StatusType, ITask[]>>(
    (acc, el) => {
      const key = el.status;
      acc[key].push(el);
      return acc;
    },
    {
      cancelled: [],
      confirmed: [],
      done: [],
      in_progress: [],
      new: [],
    },
  );

  return (
    <ul className="flex gap-2.5 mb-15">
      <StatusItem type={"new"} count={info.new.length}>
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="58" height="58" rx="10" fill="#4070F4" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.2028 29.9867L20.4501 38.8642C19.6415 39.2685 18.7541 38.4776 19.063 37.6281L22.0811 29.3285C22.1613 29.1077 22.1613 28.8657 22.0811 28.645L19.0629 20.345C18.754 19.4955 19.6413 18.7046 20.4499 19.1088L38.4165 28.091C39.1535 28.4594 39.1536 29.5113 38.4166 29.8798L38.2054 29.9854V29.9867H38.2028ZM21.8001 22.0199L33.7354 27.9867H23.9697C23.9667 27.9783 23.9637 27.9699 23.9607 27.9615L21.8001 22.0199ZM23.9697 29.9867C23.9667 29.9951 23.9637 30.0036 23.9607 30.012L21.8003 35.9529L33.7311 29.9867H23.9697Z"
            fill="white"
          />
        </svg>
      </StatusItem>
      <StatusItem type={"in_progress"} count={info.in_progress.length}>
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="58" height="58" rx="10" fill="#FFAD0D" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.8284 25.1716L31 29L34.8284 32.8284C35.5786 33.5786 36 34.596 36 35.6569V37C36 38.1046 35.1046 39 34 39H24C22.8954 39 22 38.1046 22 37V35.6569C22 34.596 22.4214 33.5786 23.1716 32.8284L27 29L23.1716 25.1716C22.4214 24.4214 22 23.404 22 22.3432V21C22 19.8954 22.8954 19 24 19H34C35.1046 19 36 19.8954 36 21V22.3432C36 23.404 35.5786 24.4214 34.8284 25.1716ZM29 29.8284L33.4142 34.2426C33.7893 34.6177 34 35.1264 34 35.6569V37H24V35.6569C24 35.1264 24.2107 34.6177 24.5858 34.2426L29 29.8284ZM29 28.1716L33.4142 23.7574C33.7893 23.3823 34 22.8736 34 22.3432V21H24V22.3432C24 22.8736 24.2107 23.3823 24.5858 23.7574L29 28.1716Z"
            fill="white"
          />
        </svg>
      </StatusItem>
      <StatusItem type={"done"} count={info.done.length}>
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="58" height="58" rx="10" fill="#0BB07B" />
          <path
            d="M38.2863 23.7092C38.678 23.3199 38.6799 22.6868 38.2906 22.295C37.9012 21.9033 37.2681 21.9014 36.8764 22.2907L26.2676 32.8353L21.7048 28.3023C21.313 27.9131 20.6798 27.9152 20.2906 28.307C19.9013 28.6988 19.9034 29.3319 20.2952 29.7212L25.563 34.9545C25.9531 35.342 26.5828 35.3419 26.9728 34.9543L38.2863 23.7092Z"
            fill="white"
          />
        </svg>
      </StatusItem>
      <StatusItem type={"cancelled"} count={info.new.length}>
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
      </StatusItem>
    </ul>
  );
}

export default StatusInfo;
