import { useContext } from "react";
import { favouriteContext } from "../context";

export default function useFavourite() {
  const { favourites, setFavourites } = useContext(favouriteContext);

  return { favourites, setFavourites };
}
