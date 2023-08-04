import React from 'react'
import {Routes} from 'react-router-dom'
import {RoutePath} from './constants'
import {Route} from 'react-router'
import MainPage from "../pages/mainPage/MainPage";
import Speech from "../pages/speech/Speech";
import SpeechNative from "../pages/mainPage/speechNative/SpeechNative";


const routes = (
    <Routes>
        <Route path={RoutePath.main} element={<MainPage/>}/>
        {/*<Route path={RoutePath.speech} element={<Speech/>}/>*/}
        <Route path={RoutePath.speech} element={<SpeechNative/>}/>
    </Routes>
)

export default routes
