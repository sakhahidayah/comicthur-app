import { useState } from "react";
import ModalComics from "../components/ModalComics";

export default function Comics({ comics }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedComic, setSelectedComic] = useState(null);
  const handleModal = (comic) => {
    setSelectedComic(comic);
    setShowModal(true);
  };
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 rounded-xl ">
        {comics?.map((comic, idx) => (
          <div className="flex flex-col gap-4  bg-[#27272a] rounded text-wrap items-center p-2 justify-between" key={idx} onClick={() => handleModal(comic)}>
            <img src={comic.thumbnail} alt={comic.title} className="rounded  w-full aspect-120/180 lg:aspect-80/120 object-cover cursor-pointer" />
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
      {showModal && <ModalComics comic={selectedComic} onClose={() => setShowModal(false)} />}
    </>
  );
}
