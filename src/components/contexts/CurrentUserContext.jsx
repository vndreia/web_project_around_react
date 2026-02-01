import { createContext, useState, useContext } from "react";

// Create a context for the current user
export const CurrentUserContext = createContext();

// Create a provider component saved in CurrentUserProvider
//This saves the context object and allows child components to access it
export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); //// STATE is created here
  return (
    //STATE is being passed HERE:
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

//Create a custom hook to use the CurrentUserContext (optional)
//It makes consuming the context easier and cleaner in functional components
export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error("useCurrentUser must be used within a CurrentUserProvider");
  }
  return context;
};
