import { createContext, useEffect, useState } from "react";


export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [img, setImg] = useState("");

  const posted = () => {
    let posts = localStorage.getItem("posts");

    if (posts) {
      return JSON.parse(localStorage.getItem("posts")); //  return JSON.parse(posts);
    } else {
      return [];
    }
  };

  const favoritePost = () => {
    let favs = localStorage.getItem("favs");

    if (favs) {
     return  JSON.parse(localStorage.getItem("favs"));
    } else {
      return [];
    }
  };

  const [favorites, setFavorites] = useState(favoritePost);

  const [post, setPost] = useState(posted);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(post));
  }, [post]);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favorites));
  }, [favorites]);

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

  const handleFav = (id) => {
    const existingFavorite = favorites.find((favorite) => favorite.id === id);

    if (existingFavorite) {
      // Remove from favorites
      setFavorites(favorites.filter((favorite) => favorite.id !== id));
    } else {
      // Add to favorites
      const favoritePost = post.find((item) => item.id === id);
      setFavorites([...favorites, favoritePost]);
    }
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
