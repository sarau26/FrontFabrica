import React, { useContext } from 'react'
import { DatePickers } from "../../Components/DatePickers" 
import { DateContext } from '../../context/DateContext';
import moment from 'moment';
import { NavButtons } from '../../components/NavButtons';


export function AgregarFecha(props) {

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
      fecha_inicio: {startDate: moment(fechaInicio.startDate).format('DD/MM/YYYY'), endDate: moment(fechaInicio.endDate).format('DD/MM/YYYY')},
      fecha_pago: {startDate: moment(fechaPago.startDate).format('DD/MM/YYYY'), endDate: moment(fechaPago.endDate).format('DD/MM/YYYY')},
      fecha_oferta: {startDate: moment(fechaOferta.startDate).format('DD/MM/YYYY')},
      fecha_matricula: {startDate: moment(fechaMatricula.startDate).format('DD/MM/YYYY'), endDate: moment(fechaMatricula.endDate).format('DD/MM/YYYY')},
      fecha_ajustes: {startDate: moment(fechaAjustes.startDate).format('DD/MM/YYYY'), endDate: moment(fechaAjustes.endDate).format('DD/MM/YYYY')},
      fecha_finales: {startDate: moment(fechaFinales.startDate).format('DD/MM/YYYY'), endDate: moment(fechaFinales.endDate).format('DD/MM/YYYY')},
      fecha_habilitaciones: {startDate: moment(fechaHabilitaciones.startDate).format('DD/MM/YYYY'), endDate: moment(fechaHabilitaciones.endDate).format('DD/MM/YYYY')},
      fecha_cierre_notas: {startDate: moment(fechaCierreNotas.startDate).format('DD/MM/YYYY'), endDate: moment(fechaCierreNotas.endDate).format('DD/MM/YYYY')},
    }
    
    
    const handleGenerate = () => {
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
      //Enviar las fechas al backend haciendo todas las validaciones...
    }
    
    let activado = true
    if(fechaInicio != '' && fechaInicio != undefined){
      activado = false
    }
    else{
      activado = true
    }

    

  return (
    <>
      <div className='container'>
      <DatePickers currentValue={fechaInicio}   title="Fecha de inicio"     visible={true} setFecha={setFechaInicio} />
      <DatePickers activado={activado}  currentValue={fechaPago}            visible={true}  title="Fecha de pagos"            setFecha={setFechaPago} />
      <DatePickers activado={activado}  currentValue={fechaOferta}          visible={false}  title="Publicación de la Oferta"  setFecha={setFechaOferta} />
      <DatePickers activado={activado}  currentValue={fechaMatricula}       visible={true}  title="Fecha de Matricula"        setFecha={setFechaMatricula} />
      <DatePickers activado={activado}  currentValue={fechaAjustes}         visible={true}  title="Fecha de Ajustes"          setFecha={setFechaAjustes} />
      <DatePickers activado={activado}  currentValue={fechaClases}          visible={true}  title="Fecha de Inicio Clases"          setFecha={setFechaClases} />
      <DatePickers activado={activado}  currentValue={fechaFinales}         visible={true}  title="Fecha de Exámenes Finales" setFecha={setFechaFinales} />
      <DatePickers activado={activado}  currentValue={fechaHabilitaciones}  visible={true}  title="Fecha de Habilitaciones"   setFecha={setFechaHabilitaciones} />
      <DatePickers activado={activado}  currentValue={fechaValidaciones}    visible={true}        title="Fecha de Validaciones"          setFecha={setFechaValidaciones} />
      <DatePickers activado={activado}  currentValue={fechaCierreNotas}     visible={true}  title="Fecha de Cierre de Notas"  setFecha={setFechaCierreNotas} />
      <DatePickers activado={activado}  currentValue={fechaTerminacion}     visible={false}      title="Fecha de Terminacion Oficial"          setFecha={setFechaTerminacion} />
      <NavButtons onSubmit={handleSubmit} onGenerate={handleGenerate} showGenerate={true}/>    
      {/* <button onClick={handleGenerate}>Generar</button>
      <button onClick={handleSubmit}>Enviar</button> */}
      </div>
    </>
  )
}
