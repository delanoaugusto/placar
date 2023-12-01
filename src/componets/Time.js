import React, { useState } from "react";
import './Time.css'


function Time(props){

    const [placar, setPlacar] = useState(0)

    return(
        <>
        <div className="NomeTime">
                <h1>{props.nome}</h1>
            </div>
        <div className="ContainerTime">
            
            <div className="Placar">{placar}</div>
        
        </div>
        <div className="placares">
        <input
          value={placar}
          onChange={e => setPlacar(e.target.value)}
          type="number"
        />
       
       </div>
        </>
        

        
    )
}


export default Time