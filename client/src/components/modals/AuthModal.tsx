import { useState } from "react";
import InputField from "../ui/InputField";
import InputPassword from "../ui/InputPassword";

function AuthModal() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);

  if (!isLogin) {
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 ">
        <div className="p-6 bg-white rounded-2xl w-[484px]">
          <div className="relative ">
            <label
              className="text-[#6BC2BB] text-[18px] absolute left-5.75 top-0 -translate-y-1/2 bg-white px-1.5"
              htmlFor="field"
            >
              E-mail
            </label>
            <input
              type="text"
              className="border border-[#6BC2BB] rounded-md text-[18px] font-medium text-[#858FA6] py-5.5 px-4 outline-none w-full"
              id="field"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 ">
      <div className="p-6 bg-white rounded-2xl w-[484px]">
        <div className="flex flex-col gap-5.5">
          <InputField value={form.username} label="Username" />
          <InputPassword
            value={form.password}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, password: value }))
            }
            label="Password"
            type="password"
          />
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
