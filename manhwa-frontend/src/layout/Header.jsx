import { useState } from "react";
import profile from "../assets/profile.jpg";
import { Search } from "lucide-react";
export default function Header() {
  const [search, setSearch] = useState(false);
  // const handleSearch = (event) => {
  //   alert("test");
  // };
  return (
    <>
      <header className="bg-[#18181b]">
        <div className="container mx-auto lg:px-8 px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-sm xl:text-xl font-bold">ComicThur</h1>
            <div className={search ? "flex items-center relative" : "flex items-center"}>
              {search && <input type="text" placeholder="Search..." className="bg-[#2d2d31] text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2 rounded-4xl" />}
              <Search onClick={() => setSearch(!search)} className={search ? "absolute right-3 top-2.5 text-gray-500" : " text-gray-500 self-end"} />
            </div>

            <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </header>
    </>
  );
}
