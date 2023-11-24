import React from "react";
import { useState } from 'react';

import Time from "./Time";
import './PlacarCon.css'

function PlacarContainer(){

    const [mandante, setmandante] = useState('');
    const [visitante, setvisitante] = useState('');
    

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
            </div>
        <div className="PlacarContainer">

            <div>
          
                <Time nome={mandante}/>
            </div>
            <div className="InfoPartida">
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