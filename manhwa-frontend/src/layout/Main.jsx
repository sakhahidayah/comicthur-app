import Cards from "../components/Cards";
export default function Main({ search }) {
  return (
    <main className="container mx-auto lg:px-8 px-2 py-2 bg-[#09090b] min-h-screen overflow-hidden text-white max-w-full">
      <Cards inputSearch={search} />
    </main>
  );
}
