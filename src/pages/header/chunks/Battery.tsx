import React from 'react';
import style from './Battery.module.scss'

const Battery = () => {
    return (
        <div className={style.BatteryWrapper}>
            <span>42%</span>
            <div className={style.Battery}>
                <div className={style.BatteryLevel}></div>
            </div>
        </div>
    );
};

export default Battery;