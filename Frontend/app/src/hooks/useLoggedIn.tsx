import { useState } from "react";

const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const setUser = (bool: boolean) => {
    setLoggedIn(bool);
  };

  return [loggedIn, setLoggedIn, setUser];
};

export default useLoggedIn;
