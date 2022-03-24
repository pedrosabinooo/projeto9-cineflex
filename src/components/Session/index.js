import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./style.css";

export default function Session() {
  const [selected, setSelected] = useState(false);
  const [session, setSession] = useState({
    id: 15,
    name: "15:00",
    day: { id: 31102021, weekday: "Domingo", date: "31/10/2021" },
    movie: {
      id: 1,
      title: "Zack Snyder Justice League",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
      overview:
        "Determined to ensure Superman ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
      releaseDate: "2021-03-18T00:00:00.000Z",
    },
    seats: [
      { id: 701, name: "1", isAvailable: true },
      { id: 702, name: "2", isAvailable: true },
      { id: 703, name: "3", isAvailable: true },
      { id: 704, name: "4", isAvailable: true },
      { id: 705, name: "5", isAvailable: true },
      { id: 706, name: "6", isAvailable: true },
      { id: 707, name: "7", isAvailable: true },
      { id: 708, name: "8", isAvailable: true },
      { id: 709, name: "9", isAvailable: true },
      { id: 710, name: "10", isAvailable: true },
      { id: 711, name: "11", isAvailable: true },
      { id: 712, name: "12", isAvailable: true },
      { id: 713, name: "13", isAvailable: true },
      { id: 714, name: "14", isAvailable: true },
      { id: 715, name: "15", isAvailable: true },
      { id: 716, name: "16", isAvailable: true },
      { id: 717, name: "17", isAvailable: true },
      { id: 718, name: "18", isAvailable: true },
      { id: 719, name: "19", isAvailable: true },
      { id: 720, name: "20", isAvailable: true },
      { id: 721, name: "21", isAvailable: true },
      { id: 722, name: "22", isAvailable: true },
      { id: 723, name: "23", isAvailable: true },
      { id: 724, name: "24", isAvailable: true },
      { id: 725, name: "25", isAvailable: true },
      { id: 726, name: "26", isAvailable: true },
      { id: 727, name: "27", isAvailable: true },
      { id: 728, name: "28", isAvailable: true },
      { id: 729, name: "29", isAvailable: true },
      { id: 730, name: "30", isAvailable: true },
      { id: 731, name: "31", isAvailable: true },
      { id: 732, name: "32", isAvailable: true },
      { id: 733, name: "33", isAvailable: true },
      { id: 734, name: "34", isAvailable: true },
      { id: 735, name: "35", isAvailable: true },
      { id: 736, name: "36", isAvailable: true },
      { id: 737, name: "37", isAvailable: true },
      { id: 738, name: "38", isAvailable: true },
      { id: 739, name: "39", isAvailable: true },
      { id: 740, name: "40", isAvailable: true },
      { id: 741, name: "41", isAvailable: true },
      { id: 742, name: "42", isAvailable: true },
      { id: 743, name: "43", isAvailable: true },
      { id: 744, name: "44", isAvailable: false },
      { id: 745, name: "45", isAvailable: true },
      { id: 746, name: "46", isAvailable: true },
      { id: 747, name: "47", isAvailable: true },
      { id: 748, name: "48", isAvailable: true },
      { id: 749, name: "49", isAvailable: true },
      { id: 750, name: "50", isAvailable: true },
    ],
  });
  /*
  const { idSessao } = useParams();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((response) => {
      setSession(response.data);
      console.log(session);
    });
    promise.catch((err) => console.log(err.response));
  }, []);
  */

  return session.id > 0 ? (
    <main className="Session">
      <h1>Selecione o(s) assento(s)</h1>
      <div className="session">
        {session.seats.map((seat) => {
          const { name, isAvailable } = seat;
          const seatState = !isAvailable ? "unavailable" : selected ? "selected" : "available";
            console.log(selected);
          return (
            <div
              className={`seat ${seatState}`}
              key={name}
              onClick={() => {
                setSelected(!selected);
              }}
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
      <div className="form">
        <span>Nome do comprador:</span>
        <input
          type="text"
          name="input"
          placeholder="Digite seu nome..."
        ></input>
        <span>CPF do comprador:</span>
        <input type="text" name="input" placeholder="Digite seu CPF..."></input>
      </div>
      <button>
        <Link to="/sucesso">Reservar assento(s)</Link>
      </button>
    </main>
  ) : (
    <span className="Session loading">Carregando...</span>
  );
}
