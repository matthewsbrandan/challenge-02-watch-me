import { useEffect, useState } from "react";
import { useMovie } from "../contexts/MovieContext";
import { api } from "../services/api";
import { Icon } from './Icon';
import { Button } from './Button';

import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar() {
  const { selectedGenreId, setSelectedGenreId } = useMovie();
  const [genres, setGenres] = useState<GenreResponseProps[]>([]); 
  const [expandedMenu, setExpandedMenu] = useState(false);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    if(expandedMenu) setExpandedMenu(false);
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
        <button type="button" className="toggle-menu" onClick={() => setExpandedMenu(!expandedMenu)}>
          <Icon name={expandedMenu ? 'close':'menu'} color={expandedMenu ? '#FAE800':'#FBFBFB'}/> 
        </button>
      </span>

      <div className={`buttons-container ${expandedMenu ? 'expanded': ''}`}>
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}