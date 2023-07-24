import React from 'react';
import {dateConverter} from "../../../../shared/utils/utils";
import flame from "../../../../assets/flame.png";
import {useBonusesData} from "./hooks/useBonusesData";
import style from './Bonuses.module.scss'

const Bonuses = () => {

    const data = useBonusesData();

    return (
        <div className={style.BonusesWrapper}>
            <div className={style.Bonuses}>
                <p className={style.CurrentBonuses}>{data.currentQuantity} бонусов</p>
                <div className={style.BurningBonuses}>
                    <span>{dateConverter(data.dateBurning, 'DD.MM')} сгорит</span>
                    <div
                        className={style.FlameBonuses}
                        style={{backgroundImage: `url(${flame})`}}
                    ></div>
                    <span>{data.forBurningQuantity} бонусов</span>
                </div>
            </div>
            <button className={style.BonusesButton}>
                <i className={style.BonusesButtonArrow}/>
            </button>
        </div>
    );
};
;
export default Bonuses;