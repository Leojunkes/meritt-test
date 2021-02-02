import React from "react";
import "../componentes/Seusresultados.css";

const Seusresultados = ({ student1 }) => (
  <div
    className="card-body mt-4 ml-3 "
    style={{ backgroundColor: "#ffffff", width: 220 }}
  >
    <div className="float-right">
      <i className="mdi mdi-account-multiple widget-icon"></i>
    </div>
    <h5
      className="font-weight-normal mt-0 text-muted"
      title="Number of Customers"
    >
      <div style={{ textAlign: "center" }} className="funcaoCard">
        {student1.funcao1}
      </div>
      <div style={{ marginTop: 7 }}>{student1.materia}</div>
    </h5>

    <p className="mb-0 text-muted">
      <span style={{ fontSize: 12, paddingRight: 0 }} className="text-nowrap">
        {student1.data}
      </span>
    </p>
    <span style={{ fontSize: 12, paddingRight: 0 }} className="text-nowrap">
      {student1.funcao}
    </span>
  </div>
);

export default Seusresultados;
