export default function Pagination({ pagination = () => {}, currentPage = 1 }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      pagination(newPage);
    }
  };
  const handleNext = () => {
    const newPage = currentPage + 1;
    pagination(newPage);
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      {currentPage > 1 && (
        <button className="px-4 py-1 bg-gray-300 text-black font-semibold rounded-2xl" onClick={handlePrevious}>
          Previous
        </button>
      )}

      <span className="text-white font-bold">Page {currentPage}</span>
      <button className="px-4 py-1 bg-gray-300 text-black font-semibold rounded-2xl" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
