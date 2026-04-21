export const getComics = async () => {
  const response = await fetch("http://localhost:3000/api/manga/page/1");
  const data = await response.json();
  return data;
};
