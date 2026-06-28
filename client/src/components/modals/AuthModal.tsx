import { useEffect, useState, type FormEvent } from "react";
import InputField from "../ui/InputField";
import InputPassword from "../ui/InputPassword";
import { useCreateUserMutation, useGetUserQuery } from "../../store/api";
interface IProps {
  open: boolean;
  setOpen: (b: boolean) => void;
}
function AuthModal({ open, setOpen }: IProps) {
  const [isValid, setIsValid] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const [createUser, { data, isSuccess }] = useCreateUserMutation();

  if (isLogin) {
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

  const submitReg = async (e: FormEvent) => {
    e.preventDefault();
    createUser(form);
  };

  useEffect(() => {
    if (isSuccess) console.log(data);
  }, [isSuccess]);

  useEffect(() => {
    function closeModal(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", closeModal);

    return () => document.removeEventListener("keydown", closeModal);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300 ${open ? "visible opacity-100 [&>div]:mt-0 [&>div]:scale-100" : "invisible opacity-0 [&>div]:mt-3 [&>div]:scale-95"} `}
      onMouseDown={() => setOpen(false)}
    >
      <form
        onSubmit={submitReg}
        onMouseDown={(e) => e.stopPropagation()}
        className="p-6 bg-white rounded-2xl w-[484px] transition-all"
      >
        <div className="flex flex-col gap-5.5 mb-5">
          <InputField
            value={form.username}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, username: value }))
            }
            label="Username"
          />
          <InputPassword
            value={form.password}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, password: value }))
            }
            onPasswordValid={setIsValid}
            label="Password"
          />
        </div>
        <button
          disabled={!isValid}
          className="font-bold text-white py-6 bg-[#6BC2BB] rounded-md w-full cursor-pointer transition-all disabled:cursor-not-allowed disabled:bg-[#E7E9ED] disabled:text-[#9EA5B8]"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default AuthModal;
