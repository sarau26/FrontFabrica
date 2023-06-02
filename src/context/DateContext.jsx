import React, { useState, createContext } from "react";
import moment from 'moment';

export const DateContext = createContext();

export const DateProvider = (props) => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaPago, setFechaPago] = useState("");
  const [fechaOferta, setFechaOferta] = useState("");
  const [fechaMatricula, setFechaMatricula] = useState("");
  const [fechaAjustes, setFechaAjustes] = useState("");
  const [fechaFinales, setFechaFinales] = useState("");
  const [fechaHabilitaciones, setFechaHabilitaciones] = useState("");
  const [fechaCierreNotas, setFechaCierreNotas] = useState("");
  const [fechaClases, setFechaClases] = useState("");
  const [fechaValidaciones, setFechaValidaciones] = useState("");
  const [fechaTerminacion, setFechaTerminacion] = useState( moment('','DD/MM/YYYY').toDate());
  

  return (
    <DateContext.Provider
      value={{
        fechaInicio,
        setFechaInicio,
        fechaPago,
        setFechaPago,
        fechaOferta,
        setFechaOferta,
        fechaMatricula,
        setFechaMatricula,
        fechaAjustes,
        setFechaAjustes,
        fechaFinales,
        setFechaFinales,
        fechaHabilitaciones,
        setFechaHabilitaciones,
        fechaCierreNotas,
        setFechaCierreNotas,
        fechaClases,
        setFechaClases,
        fechaValidaciones,
        setFechaValidaciones,
        fechaTerminacion,
        setFechaTerminacion,
      }}
    >
      {props.children}
    </DateContext.Provider>
  );
};

