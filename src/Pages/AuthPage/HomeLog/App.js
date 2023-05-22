import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-dom-router";
import Accueil from "./Accueil";
import Header from '../../../components/headerLog/Header.jsx';


const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Accueil} />
                </Switch>
            </Router>
        </>
    )
}

export default App