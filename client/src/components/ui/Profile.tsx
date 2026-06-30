import { useState } from "react";
import AuthModal from "../modals/AuthModal";

function Profile() {
  const [openModal, setOpenModal] = useState(false);
  const user = false;
  return (
    <>
      {user ? (
        <div className="flex items-center">
          <div className="flex flex-col items-end mr-3 font-bold">
            <p className="text-[#858FA6]">Hi, Paulo Mota</p>
            <p className="text-[14px]  text-[#F03D3D] cursor-pointer">Logout</p>
          </div>
          <img
            className="w-13.25 h-13.25 rounded-full object-cover"
            src="/a.png"
            alt="avatar"
          />
        </div>
      ) : (
        <div
          className="p-3 text-white rounded-2xl bg-blue-500 transition-all shadow-sm hover:bg-blue-600 cursor-pointer hover:inset-shadow-sm inset-shadow-[#000000]/30 active:scale-98"
          onClick={() => setOpenModal(true)}
        >
          Login
        </div>
      )}
      <AuthModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}

export default Profile;
