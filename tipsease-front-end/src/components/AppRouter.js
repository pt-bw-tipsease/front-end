import React from 'react';
import {Switch, Route} from 'react-router-dom';

import StartingPage from './StartingPage';
import Login from './Login';
import SignUp from './SignUp';
import TipSomeone from './TipSomeone';

export default function AppRouter(){
    return(
        <Switch>
            <Route exact path="/" component={StartingPage}/>
            <Route path="/login" component={Login}/>
            <Route path="/sign_up" component={SignUp}/>
            <Route path="/tipsomeone" component={TipSomeone}/>
        </Switch>
    )
}