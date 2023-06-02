import React, { useState, useEffect, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export const DatePickers = (props) => {
  const [startDate, setStartDate] = useState(props.currentValue?.startDate || null);
  const [endDate, setEndDate] = useState(props.currentValue?.endDate || null);
  
  
  
  useEffect(() => {
    if(props.currentValue?.startDate && props.currentValue?.endDate){
      setStartDate(props.currentValue?.startDate )
      setEndDate(props.currentValue?.endDate)
      
    }
    
     
  }, [props.currentValue])
 

  const handleDate = useCallback(() => {
    if (startDate && endDate) {
      const newDate = {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      };
          props.setFecha(newDate)   
    }
    
  }, [ startDate, endDate]);

 
     useEffect(() => {
      const currentValueStartDate = props.currentValue?.startDate;
    const currentValueEndDate = props.currentValue?.endDate;
     if (currentValueStartDate !== startDate || currentValueEndDate !== endDate) {
         handleDate() 
     }    
  }, [handleDate])  
  
  
  return (
    <>
      <section className='picker'>
        <div className='title'>
        <h1>{props.title}</h1>
        </div>
        <DatePicker  disabled={props.activado} selected={startDate}  dateFormat={'dd/MM/yyyy'} selectsStart onChange={(date) => setStartDate(date)} />
       
        {props.visible ? <DatePicker disabled={props.activado} selected={endDate}  dateFormat={'dd/MM/yyyy'} selectsEnd minDate={startDate} onChange={(date) => setEndDate(date)} /> : '' }
        
      </section>
    </>
  );
}

