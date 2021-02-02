import React from "react";
import "../../global.css";
import { Link } from "react-router-dom";

export default function Aluno() {
  return (
    <div style={{ backgroundColor: "#f0f1f5" }} className="container-fluid">
      <div className="container">
        <div className="row mt-3 mr-5">
          <div className="ml-5">
            <label style={{ marginTop: 20, fontSize: 18, color: "#747474" }}>
              Linguagens e Códigos
            </label>
          </div>
          <div style={{ marginLeft: 160, paddingTop: 20 }} className="eyesDiv">
            <i
              style={{ marginRight: 5, color: "#ef5190" }}
              className="fas fa-eye-slash "
            ></i>

            <label style={{ marginLeft: 10 }}>00:30:45</label>
          </div>

          <div>
            <i
              style={{ color: "#ef5190", marginLeft: 205 }}
              className="fas fa-th"
            ></i>
            <label style={{ marginLeft: 10, marginTop: 20 }}>Questões</label>
          </div>

          <div>
            <label style={{ marginLeft: 130, marginTop: 20 }} className="mr-3">
              entregar prova
            </label>
            <i style={{ color: "#ef5190" }} className="fas fa-paper-plane"></i>
          </div>

          <Link to="/">
            <button
              style={{
                position: "absolute",
                right: 5,
                backgroundColor: "#ef5190",
              }}
              type="button"
            >
              <i className="fas fa-long-arrow-alt-left"></i>
            </button>
          </Link>
        </div>
      </div>
      <div
        className="progress"
        style={{ height: 4, width: "100vw", marginTop: 20 }}
      >
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: "24%" }}
        ></div>
      </div>
      <div
        style={{ backgroundColor: "#ffffff" }}
        className="col jumbotron mt-4"
      >
        <div className="row">
          <label style={{marginTop:-50}}>1</label>
          <button
            style={{
              marginLeft: "39%",
              marginTop: -30,
              backgroundColor: "#ef5190",
            }}
            className="btn btn mb-5"
            type="button"
          >
            <label style={{ color: "white" }}>
              Marcada para revisar mais tarde{" "}
            </label>
            <i
              style={{ marginLeft: 20, color: "white" }}
              className="fas fa-times"
            ></i>
          </button>
          <div style={{marginTop:-50}}> 
            <i style={{color:"#ef5190", position:"absolute", right:5, fontSize:30}} className="fas fa-bookmark"></i>
            </div>
         
        </div>
        <div className="container col">
          <div className="container">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/14/46/89/3b/getlstd-property-photo.jpg" />
          </div>
          <div id="pergContainer">
            <label
              style={{
                marginLeft: 120,
                marginTop: 20,
                color: "gray",
                fontSize: 18,
              }}
            >
              O infográfico aborda a importância do inglês para os negócios.
              Nesse texto, as expressões but e yet only evidenciam:
            </label>
          </div>
        </div>
        <div id="containerQuestion" className="container">
          <div
            id="rowRespostas"
            style={{ textAlign: "center" }}
            className="row-sm-3 "
          >
            <div className="d-grid gap-2">
              <button className="btn btn " type="button">
                A - um impedimento as transações
                <label>comerciais em contexto internacional. </label>
                
              </button>
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn" type="button">
                B -{" "}
                <label>
                  {" "}
                  o desinteresse dos funcionários nos cursos oferecidos pelas
                  empresas.{" "}
                </label>
                
              </button>
            </div>

            <div className="d-grid gap-2">
              <button style={{}} className="btn btn" type="button">
                C -{" "}
                <label>
                  a necessidade de inserção de funcionários nativos no mercado
                  de trabalho globalizado.{" "}
                </label>
                
              </button>
            </div>

            <div className="d-grid gap-2">
              <button style={{}} className="btn btn" type="button">
                D - um contraste entre o ideal e
                <label>
                  o real sobre a comunicação em inglês no mundo empresarial.{" "}
                </label>
                
              </button>
            </div>
          </div>
          <div id="ButtonAnPro" className="container-row">
            <button id="ButtonAnte" className="btn btn-success" type="button">
              <i
                style={{ marginRight: 10 }}
                className="fas fa-chevron-left"
              ></i>
              <label>Anterior</label>
            </button>
            <button id="ButtonAnte" className="btn btn-success" type="button">
              <label>Próximo</label>
              <i
                style={{ marginLeft: 10 }}
                className="fas fa-chevron-right"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
