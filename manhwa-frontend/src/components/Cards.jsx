import React, { useEffect, useState } from "react";
import { getComics, getComicsByGenre } from "../services/comicService";
import Spinner from "../components/ui/spinner";
import FilterGenre from "../features/FilterGenre";
import Pagination from "./Pagination";
import Comics from "../features/Comics";
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
          <Spinner className="size-20" />
        </div>
      ) : (
        <Comics comics={comics} />
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
