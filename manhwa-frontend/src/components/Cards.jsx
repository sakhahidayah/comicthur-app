import React, { useEffect, useState } from "react";
import { getComics } from "../services/comicService";
export default function Cards() {
  const [comics, setComics] = useState([]);
  const [chapters, setChapters] = useState([]);
  useEffect(() => {
    const fetchComics = async () => {
      const data = await getComics();
      setComics(data.manga_list);
      const chapterData = data.manga_list.map((comic) => comic.chapter);
      const chapterDataFlat = chapterData.map((chapter) => chapter.replace(/\D/g, ""));
      setChapters(chapterDataFlat);
    };
    fetchComics();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-2 rounded-xl ">
      {comics?.map((comic, idx) => (
        <div className="flex flex-col gap-4  bg-[#27272a] rounded text-wrap items-center p-2 justify-between" key={idx}>
          <img src={comic.thumb} alt="Dummy" className="rounded  w-full aspect-140/200 object-cover" />
          <h4 className="text-white font-medium text-[10px]">{comic.title}</h4>
          <div className="flex flex-row gap-2 items-center justify-between">
            <span className="px-2 py-1 rounded-lg bg-[#5d5d5f] font-bold text-[10px]">Ch.{chapters[idx]}</span>
            <span className="px-2 py-1 rounded-lg bg-[#5d5d5f] font-bold text-[10px]">{comic.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
