import React from 'react';
import style from './Points.module.scss'

type PointPropsType = {
    color: string
    withBorder?: boolean
    isLast?: boolean
}

const Point = ({color, withBorder, isLast}: PointPropsType) => {
    const pointStyle = {
        width: '5.5px',
        height: '5.5px',
        marginRight: isLast ? '3px' : '1.5px',
        borderRadius: '50%',
        backgroundColor: color,
        border: withBorder ? '1px solid black' : 'none',
    };

    return <div style={pointStyle}></div>;
};

const Points = () => {

    return <div className={style.PointsWrapper}>
        <Point color="black"/>
        <Point color="black"/>
        <Point color="black"/>
        <Point color="white" withBorder={true}/>
        <Point color="white" withBorder={true} isLast={true}/>
    </div>;
};

export default Points