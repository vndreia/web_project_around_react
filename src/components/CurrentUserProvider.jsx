import { useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); //// STATE is created here
  return (
    //STATE is being passed HERE:
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {/*the values you want to pass to other components will be defined here */}
      {children}
    </CurrentUserContext.Provider>
  );
};

//3 Create a custom hook to use the CurrentUserContext (optional)
//It makes consuming the context easier and cleaner in functional components
export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error("useCurrentUser must be used within a CurrentUserProvider");
  }
  return context;
};
