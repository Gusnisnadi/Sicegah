function LocateButton({ triggerLocation }) {
  return (
    <button
      onClick={() => triggerLocation(prev => !prev)}
      className="bg-[#ffdc20] shadow-black shadow-sm w-auto h-auto min-h-[50px] text-xl text-[20px] p-[10px] rounded-[10px] cursor-pointer"
    >
      Cari Lokasi Saya
    </button>
  );
}

export default LocateButton;