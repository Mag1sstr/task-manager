import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";

interface IProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: "text" | "password";
}
function InputField({ value, onChange, label, type = "text" }: IProps) {
  const [isCorrectPass, setIsCorrectPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const hasNumber =
    value && [...value].some((el) => el !== " " && Number.isInteger(+el));

  const hasUpper = /[A-Z]/.test(value);
  useEffect(() => {
    if (type !== "password") return;

    setIsCorrectPass(value.length >= 8 && hasNumber);
  }, [value]);
  return (
    <div className="relative ">
      <label
        className="text-[#6BC2BB] text-[18px] absolute left-5.75 top-0 -translate-y-1/2 bg-white px-1.5 z-10"
        htmlFor="field"
      >
        {label}
      </label>

      {type === "password" ? (
        <div className="relative">
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type={showPass ? "text" : "password"}
            className="border border-[#6BC2BB] rounded-md text-[18px] font-medium text-[#858FA6] py-5.5 px-4 outline-none w-full pr-12"
            id="field"
          />
          <button
            onClick={() => setShowPass(!showPass)}
            className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
          >
            {showPass ? <Eye color="#9EA5B8" /> : <EyeOff color="#9EA5B8" />}
          </button>

          <div
            className={`absolute left-full top-1/2 -translate-y-1/2 w-[243px] px-7.5 py-3 ml-6.75 bg-white border-2 ${isCorrectPass ? "border-[#0BB07B]" : "border-[#F03D3D]"} `}
          >
            <ul>
              <li className="flex items-center gap-2.25 font-light text-[18px] text-[#B6BCC9]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.49993 6.49992C6.89045 6.1094 7.52362 6.1094 7.91414 6.49992L9.99997 8.58572L12.0857 6.49992C12.4763 6.1094 13.1094 6.1094 13.5 6.49992C13.8905 6.89045 13.8905 7.52361 13.5 7.91414L11.4142 9.99992L13.5 12.0857C13.8905 12.4762 13.8905 13.1094 13.5 13.4999C13.1094 13.8904 12.4763 13.8904 12.0857 13.4999L9.99997 11.4141L7.91413 13.4999C7.52361 13.8904 6.89045 13.8904 6.49992 13.4999C6.1094 13.1094 6.1094 12.4762 6.49992 12.0857L8.58567 9.99992L6.49993 7.91414C6.1094 7.52361 6.1094 6.89045 6.49993 6.49992Z"
                    fill="#F03D3D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.0001 10C20.0001 15.5228 15.5229 20 10 20C4.47716 20 0 15.5228 0 10C0 4.47715 4.47716 0 10 0C15.5229 0 20.0001 4.47715 20.0001 10ZM18.0001 10C18.0001 14.4183 14.4182 18 10 18C5.58173 18 2 14.4183 2 10C2 5.58172 5.58173 2 10 2C14.4182 2 18.0001 5.58172 18.0001 10Z"
                    fill="#F03D3D"
                  />
                </svg>
                8 characters
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          className="border border-[#6BC2BB] rounded-md text-[18px] font-medium text-[#858FA6] py-5.5 px-4 outline-none w-full"
          id="field"
        />
      )}
    </div>
  );
}

export default InputField;
