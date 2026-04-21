export const getComics = async (page) => {
  const response = await fetch(`http://localhost:3000/api/komikcast?page=${page}`);
  // const response = await fetch(`http://localhost:3000/api/komiku?genre=isekai`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
