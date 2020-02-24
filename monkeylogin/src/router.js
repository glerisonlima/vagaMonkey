import React from  'react'
import { Route, Switch } from 'react-router-dom'

import LinkToken from './pages/LinkToken'
import Registro from './pages/Registro'
import Cadastrar from './pages/Cadastrar'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Registro}/>
        <Route exact path="/cadastrar" component={LinkToken}/>
        <Route exact path="/cadastrar/:token" component={Cadastrar}/>
    </Switch>
)

export default Routes