import React from "react";
import { useState } from 'react';

import Time from "./Time";
import './PlacarCon.css'
<style>
@import url('https://fonts.cdnfonts.com/css/varsity-team');
</style>
function PlacarContainer(){

    const [mandante, setmandante] = useState('');
    const [visitante, setvisitante] = useState('');
    const [periodo, setPeriodo] = useState('1º Tempo')
    const handleChange = (event) => {
      setPeriodo(event.target.value)
    }

    return(
        <>
        <div className="times">
        <div className="timeA">
        <label>
            Time A:
          <input
          value={mandante} 
          onChange={e => setmandante(e.target.value)}
        />

          </label>
          </div>

          <div className="timeB">
          <label>
            Time B:
          <input
          value={visitante} 
          onChange={e => setvisitante(e.target.value)}
        />

          </label>
            </div>

            <div className="periodo">
              
                           
        <form>
      <select value={periodo} onChange={handleChange}>
        <option value="1º Tempo">1º Tempo</option>
        <option value="2º Tempo">2º Tempo</option>
        <option value="1º Tempo Prorrogação">1º Tempo Prorrogação</option>
        <option value="2º Tempo Prorrogação">2º Tempo Prorrogação</option>
        <option value="Penâltis">Penâltis</option>
      </select>
    </form>
      
       </div>
            </div>
        <div className="PlacarContainer">

            <div>
          
                <Time nome={mandante}/>
            </div>
            
            <div className="InfoPartida">
            <div className="periodos">
                {periodo}
                </div>
                <div className="Local">
                Seridosão 2023
                </div>
                <div className="Competicao">
                Ouro Branco/RN
                </div>
                
            </div>
            
            <div>
           
          
                <Time nome={visitante}/>
            </div>
        </div>
        </>
    )
}


export default PlacarContainer