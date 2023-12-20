import React, { useContext } from "react";
import  { AppContext } from "../context/context";

export const usePost = () => useContext(AppContext);
