import { FilterGenres } from "../services/Filter";
export default function FilterGenre() {
  const handleGenreClick = (genre) => {
    console.log(`Genre clicked: ${JSON.stringify({ name: genre.name, url: genre.url })}`);
  };
  return (
    <div className="flex flex-col gap-2 ">
      <h2 className="text-white font-medium px-1 text-lg">Filter by Genre</h2>
      <div className="">
        <div className="gap-2 mb-5 ">
          {FilterGenres.map((genre, idx) => (
            <button key={idx} className="border w-max mx-1 my-1 px-3 py-1 rounded-lg text-[12px] hover:bg-gray-600 transition duration-300 ease-in-out cursor-pointer" onClick={() => handleGenreClick(genre)}>
              {genre.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
