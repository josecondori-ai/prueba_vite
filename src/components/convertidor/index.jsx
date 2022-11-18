import React from 'react';
import { useState } from 'react';
//import './convertidor.css'
import styles from './styles.module.css'

const Convertidor = () => {
   // console.log(styles)
   const{container,container_input,input_color}=styles






const[pesos,setPesos]=useState(0)
const[dolar,setDolar]=useState(0)
console.log(pesos)



    return(
        <div className={container}>
            <h2>Convertidor de Pesos a Dolares 2022</h2>
            <div className={container_input}>
                <label className={input_color} >Pesos:</label>
                <input type="number" value={pesos} onChange={(e)=>{setPesos(e.target.value)
                setDolar((e.target.value/300).toFixed(2))}}/>
                <label>Dolares:</label>
                <input type="number" value={dolar} onChange={(e)=>{setDolar(e.target.value)
                setPesos((e.target.value*300).toFixed(2))}}  />
                
            </div>


            
        </div>
    )
}

export { Convertidor }