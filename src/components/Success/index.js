import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./style.css";

export default function Success() {
  return (
    <main className="Success">
      <h1>Pedido feito com sucesso!</h1>
      <div>
        <h2>Filme e sessão</h2>
        <span>Enola Holmes{<br></br>}24/06/2021 15:00</span>
      </div>
      <div>
        <h2>Ingressos</h2>
        <span>Assento 15</span>
        <br></br>
        <span>Assento 16</span>
      </div>
      <div>
        <h2>Comprador</h2>
        <span>Nome: João da Silva Sauro</span>
        <br></br>
        <span>CPF: 123.456.789-10</span>
      </div>
      <button>
        <Link to="/">Voltar pra Home</Link>
      </button>
    </main>
  );
}
