import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from 'components/landing'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
    </Switch>
)

export default Routes
