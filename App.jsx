import React from 'react';
import Menu from './Components/Menu';
import './index.css';
import Appp from './Appp';
import { Route, Switch } from 'react-router-dom';
import New from './New';

const App=()=> {
    return (
        <>
            <Menu />
            <Switch>
                <Route exact path="/shapeAI-p" component={Appp} />
                <Route path="/profile-info" component={New} />
            </Switch>
        </>
    );
}
export default App;