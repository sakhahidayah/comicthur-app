import { useState } from "react";
import { FilterGenres } from "../services/Filter";
export default function FilterGenre({ onGenreSelect = () => {} }) {
  const [activeGenre, setActiveGenre] = useState("");
  const handleGenreClick = (genre) => {
    console.log(`Genre clicked: ${JSON.stringify({ id: genre.id, name: genre.name, url: genre.url })}`);
    setActiveGenre(genre.id);
    onGenreSelect(genre.url);
  };
  return (
    <div className="flex flex-col gap-2 ">
      {/* <h2 className="text-white font-medium px-1 text-lg">Filter by Genre</h2> */}
      <div className="">
        <div className="gap-2 mb-5">
          {FilterGenres.map((genre) => (
            <button
              key={genre.id}
              className="border w-max mx-1 md:mx-2 md:my-2 my-1 px-3 py-1 rounded-sm text-[12px] hover:bg-gray-600 transition duration-300 ease-in-out cursor-pointer md:text-lg font-medium"
              onClick={() => handleGenreClick(genre)}
              style={{
                background: activeGenre === genre.id ? "gray" : "",
              }}
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
