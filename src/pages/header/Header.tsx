import React from 'react';
import Points from "./chunks/Points";
import Logo from "./chunks/Logo";
import style from './Header.module.scss'
import Time from "./chunks/Time";
import Battery from "./chunks/Battery";

const Header = () => {
    return (
        <div className={style.HeaderWrapper}>
            <div className={style.LeftSideHeader}>
                <Points/>
                <Logo/>
            </div>
            <Time/>
            <Battery/>
        </div>
    );
};

export default Header;