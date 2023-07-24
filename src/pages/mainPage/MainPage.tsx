import React from 'react';
import style from './MainPage.module.scss'
import infoButton from '../../assets/information-button.png'
import Bonuses from "./chunks/bonuses/Bonuses";

const MainPage = () => {

    const onClickHandler = () => {
        alert('Hello, this was done by Egor Dupanov ^_^')
    }

    return (
        <div className={style.MainPageWrapper}>
            <div className={style.Content}>
                <span>
               ЛОГОТИП
                </span>
                <button
                    className={style.Info}
                    style={{backgroundImage: `url(${infoButton})`}}
                    onClick={onClickHandler}
                >
                </button>
            </div>
            <Bonuses/>
        </div>
    );
};

export default MainPage;