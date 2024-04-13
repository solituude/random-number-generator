import React from "react";
import {observer} from "mobx-react";
import store from '../../functions/store';

const RatioPanel: React.FC = (observer(() =>(
    <form>
        <span>Длина последовательности: </span>
        <div>
            <span> N: </span>
            <input type={"number"} value={store.nSelection} onChange={(e) => store.setNSelection(Number(e.target.value))}/>
        </div>
        <br/>
       <div>
           <span>A: </span>
           <input type="number" value={store.A} onChange={(e) => store.setA(Number(e.target.value))}/>
       </div>
        <div>
            <span>B: </span>
            <input type="number" value={store.B} onChange={(e) => store.setB(Number(e.target.value))}/>
        </div>
        <div>
            <span>C: </span>
            <input type="number" value={store.C} onChange={(e) => store.setC(Number(e.target.value))}/>
        </div>
    </form>
)))

export default RatioPanel;