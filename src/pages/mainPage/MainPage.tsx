import React from 'react';
import style from './MainPage.module.scss'
import infoButton from '../../assets/information-button.png'
import Bonuses from "./chunks/bonuses/Bonuses";
import Speech from "../speech/Speech";
import {Link} from "react-router-dom";

const MainPage = () => {

    const onClickHandler = () => {
        alert('Hello, this was done by Egor Dupanov ^_^')
    }

    return (
        <>
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
            <div className={style.MainPageLink}>
                <Link className='Link' to={`/speech`}>Go to Speech</Link>
            </div>
        </>
    );
};

export default MainPage;