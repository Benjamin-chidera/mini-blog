import React from "react";
import { usePost } from "../hook/usePost";

export const Favorite = () => {
  const { favorites } = usePost();
  return (
    <div>
      <div className=" flex justify-center items-center flex-wrap gap-8 mx-5 py-5">
        {favorites.map((posts) => {
          const { title, description, id, img } = posts;

          return (
            <div key={id} className=" bg-gray-100 w-[250px] h-[100%] p-4">
              <img
                src={img}
                className=" w-[160px] h-[160px] object-cover mx-auto pb-5"
                alt={title}
              />
              <div className=" text-center">
                <h1 className=" text-2xl font-bold capitalize">{title}</h1>
                <p className=" text-xl font-medium capitalize">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
