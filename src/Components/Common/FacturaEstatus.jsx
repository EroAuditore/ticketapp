import React from "react";

const FacturaEstatus = ({ data }) => {
  /* if (!data) return <div></div>;*/

  let renderText = "";
  let renderClass = "";
  switch (data) {
    case "0": {
      renderText = "Pendiente";
      renderClass = "badge badge-secondary";
      break;
    }
    case "1": {
      renderText = "Atendiendo";
      renderClass = "badge badge-warning";
      break;
    }
    case "2": {
      renderText = "Generada";
      renderClass = "badge badge-success";
      break;
    }
    case "3": {
      renderText = "Cancelada";
      renderClass = "badge badge-danger";
      break;
    }

    default: {
      renderText = "Pendiente";
      renderClass = "badge badge-secondary";
      break;
    }
  }

  return (
    <h6>
      <span className={renderClass}>{renderText}</span>
    </h6>
  );
};

export default FacturaEstatus;
