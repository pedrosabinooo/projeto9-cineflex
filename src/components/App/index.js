import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catalog from "./../Catalog";
import Movie from "./../Movie";
import Session from "./../Session";
import Success from "./../Success";

import "./../../assets/css/reset.css";
import "./../../assets/css/style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/filme" element={<Movie />} />
        <Route path="/sessao" element={<Session />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

function Header() {
  return (
    <header>
      <h1>CINEFLEX</h1>
    </header>
  )
}