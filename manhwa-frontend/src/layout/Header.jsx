import { useState } from "react";
import profile from "../assets/profile.jpg";
import { Search } from "lucide-react";
import SearchInput from "../components/SearchInput";
export default function Header() {
  const [search, setSearch] = useState(false);
  const handleCloseSearch = () => {
    setSearch(false);
  };
  return (
    <>
      <header className="bg-[#18181b] relative">
        {search ? (
          <SearchInput className="absolute right-0 top-full mt-2" onClose={handleCloseSearch} />
        ) : (
          <div className="container mx-auto lg:px-8 px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-white text-sm xl:text-xl font-bold">ComicThur ID</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Search onClick={() => setSearch(!search)} className="text-gray-500 self-end" />
                </div>
                <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
