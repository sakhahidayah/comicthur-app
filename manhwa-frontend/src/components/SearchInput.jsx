import { X, LucideTrash, Trash } from "lucide-react";
import { useEffect, useState } from "react";
export default function SearchInput({ onClose, searchInput }) {
  const [input, setInput] = useState("");
  const handleClose = () => {
    onClose(false);
  };
  (useEffect(() => {
    const timeout = setTimeout(() => {
      if (input === "") return;
      searchInput(input);
    }, 500);
    return () => clearTimeout(timeout);
  }),
    [input, searchInput]);
  const handleReset = () => {
    setInput("");
  };
  return (
    <div className="flex items-center relative z-50">
      <div className="container mx-auto  px-4 py-4 flex items-center gap-4">
        <input type="text" placeholder="Cari Komik" value={input} onChange={(e) => setInput(e.target.value)} className="bg-[#2d2d31] text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none w-full focus:ring-2 focus:ring-blue-500 px-4 py-2 md:px-8 md:py-2 rounded-xl relative md:text-2xl" />
        <div className="absolute right-6 flex flex-row gap-2">
          <Trash className=" text-white cursor-pointer md:size-10 size-6" onClick={handleReset} />
          <X className=" text-white cursor-pointer md:size-10 size-6" onClick={handleClose} />
        </div>
      </div>
    </div>
  );
}
