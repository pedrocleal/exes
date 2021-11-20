import { useState, useContext, createContext } from "react"

const ItemsContext = createContext();

export default function ItemsProvider({ children }) {
  
  const [ items, setItems ] = useState(() => {

   const storedItems = localStorage.getItem('items')

    if (storedItems) {
      return JSON.parse(storedItems)
    }

    return [];
  });
  
  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  )
}

export function useItems() {
  return useContext(ItemsContext);
}

