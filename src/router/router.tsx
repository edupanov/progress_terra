import React from 'react'
import {Routes} from 'react-router-dom'
import {RoutePath} from './constants'
import {Route} from 'react-router'
import MainPage from "../pages/mainPage/MainPage";


const routes = (
    <Routes>
        <Route path={RoutePath.main} element={<MainPage/>}/>
    </Routes>
)

export default routes
