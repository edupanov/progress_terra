import * as React from 'react'
import styles from './Layout.module.scss'
import Header from '../pages/header/Header'

type LayoutProps = {
    children: React.ReactNode
};

const Layout = (props:LayoutProps) => {

    return (
        <div className={styles.layoutWrapper}>
                <div className={styles.container}>
                    <div className={styles.mainBlockContainer}>
                        {props.children}
                    </div>
                </div>
        </div>
    )
}

export default Layout

