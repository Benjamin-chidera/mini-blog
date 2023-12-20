import React from "react";
import { usePost } from "../hook/usePost";
import { FaTrash } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FavButn } from "../components/FavButn";

export const Home = () => {
  const { post, setPost, fav, setFav, handleDelete, handleFav, favorites } =
    usePost();
    
  return (
    <div>
      <div className=" flex justify-center items-center flex-wrap gap-8 mx-5 py-5">
        {post.map((posts) => {
          const { title, description, id, img } = posts;

          return (
            <div key={id} className=" bg-gray-100 w-[250px] h-[100%] p-4">
              <img src={img} className=" w-[160px] h-[160px] object-cover mx-auto pb-5" alt={title} />
              <div className=" text-center">
                <h1 className=" text-2xl font-bold capitalize">{title}</h1>
                <p className=" text-xl font-medium capitalize">{description}</p>
              </div>

              <div className=" flex justify-between mx-5 ">
                <div onClick={() => handleFav(id)}>
                 <FavButn/>
                </div>
                {/* <button>edit</button> */}
                <button onClick={() => handleDelete(id)}>
                  <FaTrash color="red" size={30} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
