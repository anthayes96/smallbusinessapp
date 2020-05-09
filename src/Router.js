import React from 'react'
import { Switch, Route,} from 'react-router'

import listing from './container/listing'
import login from './container/login'
import AddBusiness from './container/AddBusiness'






const Router = () => {
    return (
        <Switch>
            <Route exact path="/"  />
            <Route path="/listing" component={listing}/>
            <Route path='/login' component={login} />
            <Route path="/AddBusiness" component={AddBusiness} />
           
        </Switch>
    );
};

export default Router;