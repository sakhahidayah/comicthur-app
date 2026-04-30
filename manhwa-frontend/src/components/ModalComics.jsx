import { useEffect, useState } from "react";
import { getComicDetails } from "../services/comicService";
import Spinner from "../components/ui/spinner";

export default function ModalComics({ comic, onClose }) {
  const [comicDetails, setComicDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchComicDetails = async () => {
      setLoading(true);
      const data = await getComicDetails(comic.param);
      setComicDetails(data.data);
      const trimTittle = data.data.title.replace(/^Komik\s+/, "");
      setTitle(trimTittle);
      setLoading(false);
    };
    fetchComicDetails();
  }, [comic]);
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        <div className="relative bg-black rounded-2xl shadow-xl p-6 w-[90%] max-w-md">
          {loading ? (
            <Spinner className="size-10 mx-auto " />
          ) : (
            <>
              <button className="absolute top-2 right-3 text-gray-500 hover:text-black" onClick={onClose}>
                ✕
              </button>
              <div className=" mx-2 my-1 flex flex-row gap-2">
                <img src={comicDetails?.thumbnail} alt={comicDetails?.title} className="w-28 h-48 object-cover " />
                <div className="p-4 flex flex-col gap-2">
                  <h2 className="text-md w-max font-semibold rounded-lg ">{title}</h2>
                  <div className="flex flex-row gap-1 flex-wrap ">
                    {comicDetails?.genre?.map((genre, idx) => (
                      <p key={idx} className="text-[10px] text-gray-300 px-2 w-max  bg-[#5d5d5f] rounded-lg">
                        {genre}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
