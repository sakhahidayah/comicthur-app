export const getComics = async (page) => {
  const response = await fetch(`http://localhost:3000/api/komiku?page=${page}`);
  // const response = await fetch(`http://localhost:3000/api/komiku?genre=isekai`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
export const getComicsByGenre = async (genre, page) => {
  const response = await fetch(`http://localhost:3000/api/komiku?genre=${genre}&page=${page}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const getComicDetails = async (comic) => {
  const response = await fetch(`http://localhost:3000/api/komiku/${comic}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const getComicsBySearch = async (search, page) => {
  const response = await fetch(`http://localhost:3000/api/komiku?page=${page}&s=${search}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
