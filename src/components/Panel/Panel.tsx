import React from "react";
import s from './panel.module.scss';
// import {getPI} from "../../functions/functions";
import RatioPanel from "./RatioPanel";
import {observer} from "mobx-react";
import store from '../../functions/store';
import InfoWindow from "./InfoWindow";

const Panel: React.FC = (observer(() => {

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        store.calculatingPI();
    }

    const handleSetNPI = (event: React.ChangeEvent<HTMLInputElement>): void => {
        store.setNPI(Number(event.target.value));
    }

    return(
        <div className={s.content}>
            <div className={s.generator__container}>
                <span>Генератор:</span>
                <form className={s.form__container}>
                    <div className={s.form__type}>
                        <input id="default" type="radio"
                               onClick={() => store.setGeneratorType("default")}
                               checked={store.generatorType === "default"}/>
                        <label htmlFor="self" >Встроенный</label>
                    </div>
                    <div className={s.form__type}>
                        <input id="lemer" type="radio"
                               onClick={() => store.setGeneratorType("lemer")}
                               checked={store.generatorType === "lemer"}/>
                        <label htmlFor="lemer">Метод Лeмера</label>
                    </div>
                </form>
            </div>

            <div className={s.number__container}>
                <RatioPanel/>
                <InfoWindow/>
                <button onClick={() => store.calculateCharacteristics()}>Рассчитать</button>
                <button onClick={() => store.clearData()}>Очистить</button>
                <span>
                     Объем выборки для числа Пи
                </span>
                <input type={"number"} value={store.nPI} onChange={(e) => handleSetNPI(e)}/>
            </div>
            <button type="submit" onClick={(e) => handleSubmit(e)}>ccc</button>
            <div>PI: {store.PI === 0 ? "..." : store.PI}</div>
        </div>
    )
}))

export default Panel;