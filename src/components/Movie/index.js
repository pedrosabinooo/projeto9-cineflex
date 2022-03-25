import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./style.css";

export default function Movie() {
  const [sessions, setSessions] = useState({"id":1,"title":"Zack Snyder Justice League","posterURL":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg","overview":"Determined to ensure Superman ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.","releaseDate":"2021-03-18T00:00:00.000Z","days":[{"id":24102021,"weekday":"Domingo","date":"24/10/2021","showtimes":[{"name":"15:00","id":1},{"name":"19:00","id":2}]},{"id":25102021,"weekday":"Segunda-feira","date":"25/10/2021","showtimes":[{"name":"15:00","id":3},{"name":"19:00","id":4}]},{"id":26102021,"weekday":"Terça-feira","date":"26/10/2021","showtimes":[{"name":"15:00","id":5},{"name":"19:00","id":6}]},{"id":27102021,"weekday":"Quarta-feira","date":"27/10/2021","showtimes":[{"name":"15:00","id":7},{"name":"19:00","id":8}]},{"id":28102021,"weekday":"Quinta-feira","date":"28/10/2021","showtimes":[{"name":"15:00","id":9},{"name":"19:00","id":10}]},{"id":29102021,"weekday":"Sexta-feira","date":"29/10/2021","showtimes":[{"name":"15:00","id":11},{"name":"19:00","id":12}]},{"id":30102021,"weekday":"Sábado","date":"30/10/2021","showtimes":[{"name":"15:00","id":13},{"name":"19:00","id":14}]},{"id":31102021,"weekday":"Domingo","date":"31/10/2021","showtimes":[{"name":"15:00","id":15},{"name":"19:00","id":16}]}]});
  /*
  const { idFilme } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );
    promise.then((response) => {
      setSessions(response.data);
      console.log(sessions);
    });
    promise.catch((err) => console.log(err.response));
  }, []);
*/
  return sessions.id>0 ? (
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
                        <button></button>
                    <Link
                        to={`/sessao/${sessionId}`}
                        key={sessionId}
                    >
                        <button>{name}</button>
                    </Link>
                    </button>
                    );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  ) : (
    <span className="Movie loading">Carregando...</span>
  );
}
