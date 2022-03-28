import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./style.css";

export default function Movie() {
  const [sessions, setSessions] = useState({days:[]});
  
  const { idFilme } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((response) => setSessions(response.data));
    promise.catch((err) => console.log(err.response));
  }, [idFilme]);

  return sessions.id>0 ? (
    <>
    <main className="Movie">
      <h1>Selecione o horário</h1>
      <div className="sessions">
        {sessions.days.map((day) => {
          const { weekday, date, showtimes } = day;
          return (
            <div key={date} className="date">
              <span>
                {weekday} - {date}
              </span>
              <div>
                {showtimes.map((session) => {
                    const { name, id: sessionId } = session;
                    return (
                    <Link
                        to={`/sessao/${sessionId}`}
                        key={sessionId}
                        className="session"
                    >{name}
                    </Link>
                    );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
    <footer>
      <div className="img-border"><img src={sessions.posterURL} /></div>
      <div className="info-movie"><span>{sessions.title}</span></div>
    </footer>
    </>
  ) : (
    <span className="Movie loading">Carregando...</span>
  );
}
