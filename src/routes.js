import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import StepTwo from './components/Wizard/StepTwo';
import StepThree from './components/Wizard/StepThree';
import HousePage from './components/HousePage/HousePage';
import { Route, Switch } from 'react-router-dom';


const routes = (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/houses/:id' component={HousePage} />
        <Route exact path='/wizard' component={Wizard} />
        <Route path='/wizard/steptwo' component={StepTwo} />        
        <Route path='/wizard/stepthree' component={StepThree} />                        
    </Switch>
);


export default routes;