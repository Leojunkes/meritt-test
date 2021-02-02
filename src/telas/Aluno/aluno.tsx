import React from "react";
import "./aluno.css";
import { Link } from "react-router-dom";

export default function Aluno() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="ml-5">
        <label>Linguagens e Códigos</label>
        </div>
        <div  style={{marginLeft:250}} className="eyesDiv">
        <i style={{marginRight:5, color:'#ef5190'}} className="fas fa-eye-slash "></i>
        
        <label style={{marginLeft:10}}>00:30:45</label>
        </div>
        
        <div>
        <i style={{color:'#ef5190', marginLeft:205}} className="fas fa-th"></i>
        <label style={{marginLeft:10}}>Questões</label>
        </div>
        
        <button id="buttonEntProva" className="btn btn" style={{position:"absolute", right:14, marginRight:50}} type="button"><label className="mr-3">entregar prova</label><i style={{color:'#ef5190'}} className="fas fa-paper-plane" ></i></button>
        <Link to="/">
        <button style={{position:"absolute", right:5}} type="button"><i className="fas fa-long-arrow-alt-left"></i></button>
        </Link>
      </div>
      <div className="col jumbotron mt-4">
        
        <button style={{position:"absolute", top:8, marginLeft:450}} className="btn btn-success" type="button">Marcada para revisar mais tarde X</button>
        <div className="container col">
        <div className="container-fluid-sm3">
        <img  src="https://media-cdn.tripadvisor.com/media/photo-s/14/46/89/3b/getlstd-property-photo.jpg" />
        </div>
        <div>
        <label style={{marginLeft:120, marginTop:20, color:"gray", fontSize:18}}>
          O infográfico aborda a importância do inglês para os negócios. Nesse
          texto, as expressões but e yet only evidenciam:
        </label>
        </div>
        
        </div>
        <div id="containerQuestion" className="container">
          
          <div className="row-sm-3 ">
            <div className="d-grid gap-2">
            <button className="btn btn " type="button">
              A <i className="far fa-circle"></i> um impedimento as transações comerciais em contexto
              internacional. <i className="fas fa-ellipsis-h"></i>
            </button>
            </div>

            <div className="d-grid gap-2">
            <button className="btn btn" type="button">
              B<i className="fas fa-circle"></i> o desinteresse dos funcionários nos cursos oferecidos
              pelas empresas. <i className="fas fa-ellipsis-h"></i>
            </button>
            </div>

            <div className="d-grid gap-2">
            <button style={{marginLeft:116}} className="btn btn" type="button">
              C <i className="far fa-circle"></i> a necessidade de inserção de funcionários nativos no
              mercado de trabalho globalizado. <i className="fas fa-ellipsis-h"></i>
            </button>
            </div>


            <div className="d-grid gap-2">
            <button style={{marginLeft:130}} className="btn btn" type="button">
              D<i className="far fa-circle"></i> um contraste entre o ideal e o real sobre a comunicação
              em inglês no mundo empresarial. <i className="fas fa-ellipsis-h"></i>
            </button>
            </div>

          </div>
          <div id="ButtonAnPro" className="container-row">
            <button className="btn btn" type="button"><i className="fas fa-chevron-left"></i>Anterior</button>
            <button id="ButtonAnte"  className="btn btn-success" type="button">Próximo<i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}
