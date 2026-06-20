import AuthModal from "../modals/AuthModal";

function Profile() {
  return (
    <>
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
      <div className="p-3 bg-zinc-400">Login</div>
      <AuthModal />
    </>
  );
}

export default Profile;
