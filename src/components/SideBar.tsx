import { GenreResponseProps } from '../App'

import { Button } from '../components/Button';

interface Props {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: any;
}

export function SideBar(props: Props) {
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {props.genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          selected={props.selectedGenreId === genre.id}
          onClick={() => props.handleClickButton(genre.id)}
        />
      ))}
    </div>
  </nav>
  )
}