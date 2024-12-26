import { useState } from "react";
import { favouriteContext } from "../context";

export default function FavouriteProvider({children}) {
   const [favourites, setFavourites] = useState([]);
   return (
    <favouriteContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </favouriteContext.Provider>
  )
}
