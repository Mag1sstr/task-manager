interface IProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: "text" | "password";
}
function InputField({ value, onChange, label, type = "text" }: IProps) {
  return (
    <div className="relative ">
      <label
        className="text-[#6BC2BB] text-[18px] absolute left-5.75 top-0 -translate-y-1/2 bg-white px-1.5 z-10"
        htmlFor="field"
      >
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        className="border border-[#6BC2BB] rounded-md text-[18px] font-medium text-[#858FA6] py-5.5 px-4 outline-none w-full"
        id="field"
      />
    </div>
  );
}

export default InputField;
