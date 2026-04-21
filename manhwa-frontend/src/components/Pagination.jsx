import React, { useState } from "react";
export default function Pagination({ pagination = () => {} }) {
  const [page, setPage] = useState(1);

  const handlePrevious = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      pagination(newPage);
    }
  };
  const handleNext = () => {
    const newPage = page + 1;
    setPage(newPage);
    pagination(newPage);
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      {page > 1 && (
        <button className="px-4 py-1 bg-gray-300 text-black font-semibold rounded-2xl" onClick={handlePrevious}>
          Previous
        </button>
      )}

      <span className="text-white font-bold">Page {page}</span>
      <button className="px-4 py-1 bg-gray-300 text-black font-semibold rounded-2xl" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
