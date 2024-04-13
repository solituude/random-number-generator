import React from "react";
import {observer} from "mobx-react";
import s from './panel.module.scss';
import store from "../../functions/store";

const InfoWindow: React.FC = (observer(() => {
    return(
        <div className={s.info__container}>
            {
                store.characteristicsArray.map((item, i) => (
                    <div className={s.info__ceil}>
                        {i + 1}) mx = {store.characteristicsArray[i].mx} <br/>
                        Dx = {store.characteristicsArray[i].Dx} <br/>
                        бx = {store.characteristicsArray[i].MSD}
                        <hr/>
                    </div>
                ))
            }
        </div>
    )
}));

export default InfoWindow;