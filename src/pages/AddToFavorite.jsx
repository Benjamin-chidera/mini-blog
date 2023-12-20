import React from "react";
import { usePost } from "../hook/usePost";

export const AddToFavorite = () => {
  const {
    handlePost,
    title,
    setTitle,
    description,
    setDescription,
    error,
    img,
    setImg,
  } = usePost();

  return (
    <div>
      <p>{error}</p>
      <div className=" flex justify-center items-center h-screen pb-10">
        <form onSubmit={handlePost}>
          <div className=" flex flex-col gap-3">
            <label htmlFor="">Title:</label>
            <input
              placeholder="Title"
              type="text"
              className=" bg-gray-100 h-[40px] w-[330px] md:w-[400px] p-5 outline-none "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className=" flex flex-col gap-3 mt-4">
            <label htmlFor="">Image Url:</label>
            <input
              placeholder="Image Url"
              type="text"
              className=" bg-gray-100 h-[40px] w-[330px] md:w-[400px] p-5 outline-none "
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className=" flex flex-col gap-3 mt-5">
            <label htmlFor="">Description:</label>
            <textarea
              placeholder="Description"
              type="text"
              className=" bg-gray-100 h-[200px] w-[330px] md:w-[400px] p-5 outline-none "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className=" bg-black text-white py-2 px-10 mt-5 shadow">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};
