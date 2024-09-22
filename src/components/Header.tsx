import { GenreResponseProps } from "../App"

export function Header({ selectedGenre }: { selectedGenre: GenreResponseProps }) {

  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}