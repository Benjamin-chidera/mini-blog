import { Link } from "react-router-dom";
import { usePost } from "../hook/usePost";

export const Navbar = () => {
  const {favorites, post} = usePost()
  return (
    <div>
      <div className=" flex justify-between items-center px-5 bg-black text-white p-7">
        <Link to={"/"} className=" text-[20px] font-bold">
          MINI-BLOG <sup>({post.length})</sup>
        </Link>

        <div className="flex gap-5">
          <Link className=" text-[17px]" to={"/addToFavorite"}>
            Add To Favorite
          </Link>
          <Link className=" text-[17px]" to={"/Favorite"}>
            Favorites <sup>({favorites.length})</sup>
          </Link>
        </div>
      </div>
    </div>
  );
};
