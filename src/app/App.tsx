import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from "../layout/Layout";
import routes from "../router/router";
import Header from "../pages/header/Header";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Header/>
                {routes}
            </Layout>
        </BrowserRouter>
    );
}

export default App;
