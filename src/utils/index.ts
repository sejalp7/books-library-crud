import { Book } from "../datamodel";

// util function to get the favourites list from local storage
export const getFavorites = (): number[] => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

// util function to set the favourite book in local storage
export const setFavorites = (favorites: number[]): void => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};


export const paginatedList = (list: Book[], currentPage: number, booksPerPage: number) => {
  return list?.sort((a,b) => b.id - a.id).slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );
}

export const formatDate = (dateValue: string) => {
  const date = new Date(dateValue);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

