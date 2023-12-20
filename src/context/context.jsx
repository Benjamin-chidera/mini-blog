import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [img, setImg] = useState("");
  const [fav, setFav] = useState(false);

  const posted = () => {
    let posts = localStorage.getItem("posts");

    if (posts) {
      return JSON.parse(localStorage.getItem("posts")); //  return JSON.parse(posts);
    } else {
      return [];
    }
  };

  const [favorites, setFavorites] = useState([]);

  const [post, setPost] = useState(posted);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(post));
  }, [post]);

  const handlePost = (e) => {
    e.preventDefault();
    if (!title || !description || !img) {
      setError("Please enter a value");
    } else {
      const newPost = {
        id: Math.random(),
        title,
        description,
        img,
      };

      setPost([...post, newPost]);
      setTitle("");
      setDescription("");
      setImg("");
    }
  };

  const handleDelete = (id) => {
    const filter = post.filter((item) => item.id !== id);
    setPost(filter);
  };

  const handleFav = (post) => {
    setFavorites([...favorites, post]);
    setFav(!fav)
  };

  return (
    <AppContext.Provider
      value={{
        handlePost,
        title,
        setTitle,
        description,
        setDescription,
        error,
        post,
        setPost,
        img,
        setImg,
        handleDelete,
        fav,
        setFav,
        handleFav,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
