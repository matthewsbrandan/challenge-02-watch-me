import { createContext, ReactNode, useContext, useState } from 'react';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieContextProviderProps {
  children: ReactNode;
}

interface MovieContextData{
  selectedGenreId: number;
  setSelectedGenreId: (selectedGenreId: number) => void;
  selectedGenre: GenreResponseProps;
  setSelectedGenre: (selectedGenre: GenreResponseProps) => void;
}

export const MovieContext = createContext({} as MovieContextData);

export function MovieContextProvider({ children }: MovieContextProviderProps){
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <MovieContext.Provider value={{
      selectedGenreId, setSelectedGenreId,
      selectedGenre, setSelectedGenre
    }}>
      {children}
    </MovieContext.Provider>
  );
}

export const useMovie = () => {
  return useContext(MovieContext);
}