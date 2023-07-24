import React from 'react';
import {HashRouter} from 'react-router-dom';
import Layout from "../layout/Layout";
import routes from "../router/router";
import Header from "../pages/header/Header";

function App() {
    return (
        <HashRouter>
            <Layout>
                <Header/>
                {routes}
            </Layout>
        </HashRouter>
    );
}

export default App;
