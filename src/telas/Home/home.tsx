import React, { useEffect, useState } from "react";

import Provas from "../../componentes/ProvasProgresso";
import Proximasprovas from "../../componentes/ProximasProvas";
import Seusresultados from "../../componentes/Seusresultados";
import api from "../../services/api";
import "./home.css";
import { Link } from "react-router-dom";
import Matematica from '../Aluno/matematica';

export default function Home() {
  const [profes, setProfes] = useState([]);
  const [students, setStudents] = useState([]);
  const [students1, setStudents1] = useState([]);

  useEffect(() => {
    api
      .get("/proofs")
      .then(function (res) {
        console.log(res);
      })
      .catch(console.log);
  }, []);
  useEffect(() => {
    api
      .get("/proofs")
      .then(function (res) {
        setProfes(res.data);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    api
      .get("/students")
      .then(async (res) => {
        setStudents(res.data);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    api
      .get("/students1")
      .then(async (res) => {
        setStudents1(res.data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <div id="containerGeral" className="container-fluid-sm3 ">
        <div className="col-sm3">
          <h4 className="ml-3">Olá Luisa Martins</h4>
          <div id="provasP" className="jumbotron ">
            <label id="textProvas" className="mt-0">
              Provas em progresso (3)
            </label>
            <div id="RowCard" className="row">
              {profes.map((profe, index) => (
                <Provas key={index} profe={profe} />
              ))}
            </div>
            <div className="row mt-2">
              <Link to="/LinguagensCodigos">
                <button style={{marginLeft:80}} type="button">Responder</button>
              </Link>
              <Link to="/matematica">
                <button style={{marginLeft:200}} type="button">Responder</button>
              </Link>
              <Link to="/fisica">
                <button style={{marginLeft:200}} type="button">Responder</button>
              </Link>
            </div>
          </div>
        </div>

        <div id="containerGeral" className="container-fluid-sm3 ">
          <div id="provasP" className="jumbotron ">
            <label id="textProvas" className="mt-0">
              Próximas Provas (2)
            </label>
            <div id="RowCard" className="row">
              {students.map((student, index) => (
                <Proximasprovas key={index} student={student} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid-sm3 ">
        <div id="provasP1" className="jumbotron ">
          <label>Seus resultados (3)</label>
          <div className="container-fluid">
            <div className="col-sm3">
              {students1.map((student1, index) => (
                <Seusresultados key={index} student1={student1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
