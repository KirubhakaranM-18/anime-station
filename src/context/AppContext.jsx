/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

const defaultContextValue = {
  wishlist: [],
  toggleWishlist: () => {},
  notify: () => {},
};

const AppContext = createContext(defaultContextValue);

function wishlistReducer(state, action) {
  switch (action.type) {
    case "TOGGLE": {
      const exists = state.some(
        (item) => item.id === action.payload.id
      );

      return exists
        ? state.filter((item) => item.id !== action.payload.id)
        : [...state, action.payload];
    }

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [wishlist, dispatch] = useReducer(
    wishlistReducer,
    []
  );

  const [message, setMessage] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleWishlist = (product) => {
    dispatch({ type: "TOGGLE", payload: product });
  };

  const notify = (text) => {
    setMessage(text);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => setMessage(""), 2500);
  };

  return (
    <AppContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        notify,
      }}
    >
      {children}

      {message && <div className="toast">{message}</div>}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}