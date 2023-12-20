import { FaRegHeart } from "react-icons/fa";

import { usePost } from "../hook/usePost";

export const FavButn = () => {
  const { post, handleFav } = usePost();

  return (
    <div>
      <div onClick={() => handleFav(post)}>
        <button>
          <FaRegHeart color="red" size={30} />
        </button>
      </div>
    </div>
  );
};
