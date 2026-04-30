import { useState } from "react";
import profile from "../assets/profile.jpg";
import { Search } from "lucide-react";
import SearchInput from "../components/SearchInput";
export default function Header({ searchValue }) {
  const [showSearch, setShowSearch] = useState(false);
  const handleCloseSearch = () => {
    setShowSearch(false);
  };
  const handleSearchInput = (value) => {
    searchValue(value);
  };
  return (
    <>
      <header className="bg-[#18181b] relative md:h-20 ">
        {showSearch ? (
          <SearchInput className="absolute right-0 top-full mt-2" onClose={handleCloseSearch} searchInput={handleSearchInput} />
        ) : (
          <div className="container mx-auto lg:px-8 px-4 py-4 w-full">
            <div className="flex items-center justify-between">
              <h1 className="text-white text-sm xl:text-xl font-bold md:text-2xl cursor-pointer" onClick={() => window.location.reload()}>
                ComicThur ID
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Search onClick={() => setShowSearch(!showSearch)} className="text-gray-500 self-end md:size-9" />
                </div>
                <img src={profile} alt="Profile" className="w-10 h-10 rounded-full md:w-14 md:h-14" />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
