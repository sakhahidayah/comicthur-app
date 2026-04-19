import { X } from "lucide-react";
export default function SearchInput({ onClose }) {
  const handleClose = () => {
    onClose(false);
  };
  return (
    <div className="flex items-center relative z-50">
      <div className="container mx-auto lg:px-8 px-4 py-4 flex items-center gap-4">
        <input type="text" placeholder="Cari Komik" className="bg-[#2d2d31] text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none w-full focus:ring-2 focus:ring-blue-500 px-4 py-2 rounded-xl relative" />
        <X className="absolute right-6 text-white cursor-pointer" onClick={handleClose} />
      </div>
    </div>
  );
}
