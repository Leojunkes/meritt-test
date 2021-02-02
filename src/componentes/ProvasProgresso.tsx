import React from "react";
import "./ProvasProgreesso.css";

import { Link } from "react-router-dom";

const Provas = ({ profe }) => (
  <div
    className="container card-body mt-4 ml-3 "
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
        {profe.funcao}
      </div>

      <div style={{ marginTop: 7 }}>{profe.materia}</div>
    </h5>

    <div className="progress" style={{ height: 4, marginTop: 30 }}>
      <div
        className="progress-bar bg-danger"
        role="progressbar"
        style={{ width: "25%" }}
      ></div>
    </div>
    <p className="mb-0 text-muted">
      <div style={{ paddingTop: 5 }} className="row">
        <i style={{ paddingTop: 3 }} className="fas fa-clock"></i>
        <label style={{ paddingLeft: 5 }}>{profe.tempo}</label>
        <i style={{ marginLeft: 21, paddingTop: 3 }} className="fas fa-th"></i>
        <label style={{ paddingLeft: 5 }}>{profe.questoes}</label>
      </div>
      <span style={{ fontSize: 12, paddingRight: 0 }} className="text-nowrap">
        {profe.data}
      </span>
    </p>
  </div>
);

export default Provas;
