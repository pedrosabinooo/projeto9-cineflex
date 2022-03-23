import { Link } from "react-router-dom";

import "./style.css";

export default function Catalog() {
  return (
    <main className="Catalog">
      <h1>Selecione o filme</h1>
      <div className="movies">
        <Link to="/filme" className="movie">Filme</Link>
        <Link to="/filme" className="movie">Filme</Link>
        <Link to="/filme" className="movie">Filme</Link>
        <Link to="/filme" className="movie">Filme</Link>
        <Link to="/filme" className="movie">Filme</Link>
        <Link to="/filme" className="movie">Filme</Link>
      </div>
    </main>
  );
}
