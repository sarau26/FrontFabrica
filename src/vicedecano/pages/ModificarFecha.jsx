import React, { useContext } from 'react'
import { DatePickers } from "../Components/DatePickers" 
import { DateContext } from '../../context/DateContext';
import moment from 'moment';
import { NavButtons } from '../../components/NavButtons';


export function Modificar() {

  const { fechaInicio,
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
    fechaValidaciones,
    setFechaValidaciones,
    fechaClases,
    setFechaClases,
    fechaTerminacion,
    setFechaTerminacion,
    
  } = useContext(DateContext);
    
// Calcular los días/semanas/mes que transcurren por cada fecha despues de fecha_inicio

    const fechas = {
      fecha_inicio: {startDate: "", endDate: ""},
      fecha_pago: {startDate: "", endDate: ""},
      fecha_oferta: {startDate: "", endDate: ""},
      fecha_matricula: {startDate: "", endDate: ""},
      fecha_ajustes: {startDate: "", endDate: ""},
      fecha_finales: {startDate: "", endDate: ""},
      fecha_habilitaciones: {startDate: "", endDate: ""},
      fecha_cierre_notas: {startDate: "", endDate: ""},
    }

    const handleClick = () => {
      setFechaPago({startDate: moment(moment(fechaInicio.startDate).add(31, 'days'),'DD/MM/YYYY').toDate(), endDate: moment(moment(moment(fechaInicio.startDate).add(31, 'days')).add(7, 'days') ,'DD/MM/YYYY').toDate()})
      setFechaOferta({startDate: moment(moment(fechaInicio.startDate).add(10, 'days'),'DD/MM/YYYY').toDate()})
      setFechaMatricula({startDate: moment('17/04/2023','DD/MM/YYYY').toDate(), endDate: moment('29/04/2023','DD/MM/YYYY').toDate()})
      setFechaAjustes({startDate: moment('17/04/2023','DD/MM/YYYY').toDate(), endDate: moment('29/04/2023','DD/MM/YYYY').toDate()}) 
      setFechaFinales({startDate: moment('17/04/2023','DD/MM/YYYY').toDate(), endDate: moment('29/04/2023','DD/MM/YYYY').toDate()})
      setFechaHabilitaciones({startDate: moment('17/04/2023','DD/MM/YYYY').toDate(), endDate: moment('29/04/2023','DD/MM/YYYY').toDate()})
      setFechaCierreNotas({startDate: moment('17/04/2023','DD/MM/YYYY').toDate(), endDate: moment('29/04/2023','DD/MM/YYYY').toDate()})
      setFechaClases({startDate: moment('17/04/2023','DD/MM/YYYY').toDate(), endDate: moment('29/04/2023','DD/MM/YYYY').toDate()})
      setFechaValidaciones({startDate: moment('17/04/2023','DD/MM/YYYY').toDate(), endDate: moment('29/04/2023','DD/MM/YYYY').toDate()})
      setFechaTerminacion({startDate: moment('17/04/2023','DD/MM/YYYY').toDate(), endDate: moment('29/04/2023','DD/MM/YYYY').toDate()})
    }
    


    const handleSubmit = () =>{
      console.log(fechas)
      //Enviar las fechas al backend haciendo todas las validaciones...
    }
    
 
    return (
      <>
        <div className='container'>
        <DatePickers currentValue={fechaInicio}   title="Fecha de inicio"     visible={true} setFecha={setFechaInicio} />
        <DatePickers   currentValue={fechaPago}            visible={true}  title="Fecha de pagos"            setFecha={setFechaPago} />
        <DatePickers   currentValue={fechaOferta}          visible={false}  title="Publicación de la Oferta"  setFecha={setFechaOferta} />
        <DatePickers   currentValue={fechaMatricula}       visible={true}  title="Fecha de Matricula"        setFecha={setFechaMatricula} />
        <DatePickers   currentValue={fechaAjustes}         visible={true}  title="Fecha de Ajustes"          setFecha={setFechaAjustes} />
        <DatePickers   currentValue={fechaClases}          visible={true}  title="Fecha de Inicio Clases"          setFecha={setFechaClases} />
        <DatePickers   currentValue={fechaFinales}         visible={true}  title="Fecha de Exámenes Finales" setFecha={setFechaFinales} />
        <DatePickers   currentValue={fechaHabilitaciones}  visible={true}  title="Fecha de Habilitaciones"   setFecha={setFechaHabilitaciones} />
        <DatePickers   currentValue={fechaValidaciones}    visible={true}        title="Fecha de Validaciones"          setFecha={setFechaValidaciones} />
        <DatePickers   currentValue={fechaCierreNotas}     visible={true}  title="Fecha de Cierre de Notas"  setFecha={setFechaCierreNotas} />
        <DatePickers   currentValue={fechaTerminacion}     visible={false}      title="Fecha de Terminacion Oficial"          setFecha={setFechaTerminacion} />
        <NavButtons    onSubmit={handleSubmit} />    
        {/* <button onClick={handleClick}>Generar</button>
        <button onClick={handleSubmit}>Enviar</button> */}
        </div>
      </>
    )
}
