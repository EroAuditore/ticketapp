import React from "react";

const MovimientoEstatus = ({ data }) => {
  /* if (!data) return <div></div>;*/

  let renderText = "";
  let renderClass = "";
  switch (data) {
    case "pendiente": {
      renderText = "Pendiente";
      renderClass = "badge badge-secondary";
      break;
    }

    case "generado":
    case "depositado": {
      renderText = "Generado";
      renderClass = "badge badge-success";
      break;
    }
    case "comisionado": {
      renderText = "Generado";
      renderClass = "badge badge-danger";
      break;
    }

    case "depositado": {
      renderText = "Pagado";
      renderClass = "badge badge-warning";
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

export default MovimientoEstatus;
