import React, { useEffect, useState } from "react";
import { getComics, getComicsByGenre } from "../services/comicService";
import Spinner from "../components/ui/spinner";
import FilterGenre from "../features/FilterGenre";
import Pagination from "./Pagination";
export default function Cards() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let data;
      if (genre) {
        data = await getComicsByGenre(genre, page);
      } else {
        data = await getComics(page);
      }
      setComics(data.data);
      setLoading(false);
    };
    fetchData();
  }, [page, genre]);
  return (
    <>
      <FilterGenre
        onGenreSelect={(genreUrl) => {
          setGenre(genreUrl);
          setPage(1);
        }}
      />
      {loading ? (
        <div className="h-screen grid place-items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 rounded-xl ">
            {comics?.map((comic, idx) => (
              <div className="flex flex-col gap-4  bg-[#27272a] rounded text-wrap items-center p-2 justify-between" key={idx} onClick={() => alert(JSON.stringify(comic))}>
                <img src={comic.thumbnail} alt={comic.title} className="rounded  w-full aspect-140/200 object-cover" />
                <h4 className="text-white font-medium text-[10px] md:text-sm">{comic.title}</h4>
                <div className="flex flex-row gap-1 md:gap-2 items-center justify-between">
                  {comic.rating ? (
                    <>
                      <span className="px-2 py-1 rounded-lg bg-[#5d5d5f] font-bold text-[7px] md:text-sm">Score {comic.rating}</span>
                      <span className="px-2 py-1 rounded-lg bg-[#5d5d5f] font-bold text-[7px] md:text-sm">{comic.type}</span>
                    </>
                  ) : (
                    <span className="px-2 py-1 rounded-lg bg-[#5d5d5f] font-bold text-[7px] md:text-sm">{comic.latest_chapter}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <Pagination
        pagination={(newPage) => {
          setPage(newPage);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        currentPage={page}
      />
    </>
  );
}
