import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { usePost } from "../hook/usePost";

export const FavButn = () => {
  const { post, fav, handleFav } = usePost();
  return (
    <div>
      <div onClick={() => handleFav(post)}>
        {fav ? (
          <button>
            <FaHeart color="red" size={30} />
          </button>
        ) : (
          <button>
            <FaRegHeart color="red" size={30} />
          </button>
        )}
      </div>
    </div>
  );
};
