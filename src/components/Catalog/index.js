import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";

export default function Catalog() {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
      const promise = axios.get(
        "https://mock-api.driven.com.br/api/v5/cineflex/movies"
      );
      promise.then((response) => setPosters(response.data));
      promise.catch((err) => console.log(err.response));
  }, []);

  return posters.length > 0 ? (
    <main className="Catalog">
      <h1>Selecione o filme</h1>
      <div className="posters">
        {posters.map((poster) => {
          const { id, title, posterURL } = poster;
          return (
            <Link to={`/filme/${id}`} className="poster" key={id}>
                <img src={posterURL} alt={title} />
            </Link>
          );
        })}
      </div>
    </main>
  ) : <span>Carregando...</span>;
}
