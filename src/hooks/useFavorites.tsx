import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext<string[]>([]);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
};

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const stored = localStorage.getItem("salawat-favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("salawat-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((fav) => fav !== id);
      }
      return [...prev, id];
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};