import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./style.css";

export default function Session() {
  const [selected, setSelected] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", cpf: "", seats: [] });
  const [session, setSession] = useState({});

  const { idSessao } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((response) => setSession(response.data));
    promise.catch((err) => console.log(err.response));
  }, [idSessao]);

  return session.id > 0 ? (
    <>
      <main className="Session">
        <h1>Selecione o(s) assento(s)</h1>
        <div className="session">
          {session.seats.map((seat) => {
            const { name, isAvailable } = seat;
            const seatState = !isAvailable
              ? "unavailable"
              : selected
              ? "selected"
              : "available";
            return (
              <div
                className={`seat ${seatState}`}
                key={name}
                onClick={() => setSelected(!selected)}
              >
                <span>{name}</span>
              </div>
            );
          })}
        </div>
        <div className="legend">
          <div>
            <div className="seat selected"></div>
            <span>Selecionado</span>
          </div>
          <div>
            <div className="seat available"></div>
            <span>Disponível</span>
          </div>
          <div>
            <div className="seat unavailable"></div>
            <span>Indisponível</span>
          </div>
        </div>
        <form className="form" action={`/sucesso/:${userInfo}`}>
          <span>Nome do comprador: {console.log(userInfo)}</span>
          <input
            type="text"
            name="userName"
            placeholder="Digite seu nome..."
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            value={userInfo.name}
          ></input>
          <span>CPF do comprador:</span>
          <input
            type="text"
            name="cpf"
            placeholder="Digite seu CPF..."
            onChange={(e) => setUserInfo({ ...userInfo, cpf: e.target.value })}
            value={userInfo.cpf}
          ></input>
          <button type="submit">Reservar assento(s)</button>
        </form>
      </main>
      <footer>
        <div className="img-border">
          <img src={session.movie.posterURL} />
        </div>
        <div className="info-movie">
          <span>{session.movie.title}</span>
          <span>{session.day.weekday} - {session.name}</span>
        </div>
      </footer>
    </>
  ) : (
    <span className="Session loading">Carregando...</span>
  );
}
