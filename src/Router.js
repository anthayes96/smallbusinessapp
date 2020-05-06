import React from 'react'
import { Switch, Route,} from 'react-router'

import listing from './container/listing'
import login from './container/login'






const Router = () => {
    return (
        <Switch>
            <Route exact path="/"  />
            <Route path="/listing" component={listing}/>
            <Route path='/login' component={login} />
           
        </Switch>
    );
};

export default Router;