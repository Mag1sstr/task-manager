function AuthModal() {
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

export default AuthModal;
