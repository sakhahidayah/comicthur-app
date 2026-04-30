import React, { useEffect, useState } from "react";
import { getComics, getComicsByGenre, getComicsBySearch } from "../services/comicService";
import Spinner from "../components/ui/spinner";
import FilterGenre from "../features/FilterGenre";
import Pagination from "./Pagination";
import Comics from "../features/Comics";
import NotFound from "./NotFound";
export default function Cards({ inputSearch }) {
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
      } else if (inputSearch) {
        data = await getComicsBySearch(inputSearch, page);
      } else {
        data = await getComics(page);
      }
      setComics(data.data);
      setLoading(false);
    };
    fetchData();
  }, [page, genre, inputSearch]);
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
          <Spinner className="size-20" />
        </div>
      ) : (
        <>{comics.length > 0 ? <Comics comics={comics} /> : <NotFound />}</>
      )}
      {inputSearch ? null : (
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
      )}
    </>
  );
}
