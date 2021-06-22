import React from 'react'

// PACKAGES
import { Route, Switch} from 'react-router-dom'


// COMPONENTS
import Default from '../pages/Default'
import Contact from '../pages/Contact'
import How from '../pages/How'
import RequestHelp from '../pages/RequestHelp'
import Home from '../pages/Home'
import Donation from '../pages/Donation'


const Routes = () => {
    return (  
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/donation" exact component={Donation} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/how" exact component={How} />
            <Route path="/request_help" exact component={RequestHelp} />
            <Route exact component={Default} />
        </Switch>
    )
}

export default Routes