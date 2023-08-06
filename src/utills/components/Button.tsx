import React, {ReactNode} from 'react';
import style from './Button.module.scss';

type propsType = {
    onClick: () => void
    disabled?: boolean
    children: ReactNode

}

const Button = ({onClick, disabled, children}: propsType) => {
    return (
        <button className={style.Button} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
