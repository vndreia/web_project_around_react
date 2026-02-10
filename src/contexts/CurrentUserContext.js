import { createContext } from "react";

//create context creates the box
//usecontext opens the box and is what you can use in the custom hook function

// 1. Create a context for the current user
export const CurrentUserContext = createContext();

// 2. Create a provider component saved in CurrentUserProvider
//This saves the context object and allows child components to access it
