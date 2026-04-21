import React, { useEffect, useState } from "react";
import { getComics } from "../services/comicService";
import Spinner from "../components/ui/spinner";
import FilterGenre from "../features/FilterGenre";
import Pagination from "./Pagination";
export default function Cards() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchComics = async () => {
      setLoading(true);
      const data = await getComics(page);
      setComics(data.data);
      setLoading(false);
    };
    fetchComics();
  }, [page]);
  return (
    <>
      {loading ? (
        <div className="h-screen grid place-items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <FilterGenre />
          <div className="grid grid-cols-3 gap-2 rounded-xl ">
            {comics?.map((comic, idx) => (
              <div className="flex flex-col gap-4  bg-[#27272a] rounded text-wrap items-center p-2 justify-between" key={idx}>
                <img src={comic.thumbnail} alt="Dummy" className="rounded  w-full aspect-140/200 object-cover" />
                <h4 className="text-white font-medium text-[10px]">{comic.title}</h4>
                <div className="flex flex-row gap-1 items-center justify-between">
                  <span className="px-2 py-1 rounded-lg bg-[#5d5d5f] font-bold text-[7px]">Score {comic.rating}</span>
                  <span className="px-2 py-1 rounded-lg bg-[#5d5d5f] font-bold text-[7px]">{comic.type}</span>
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
      />
    </>
  );
}
