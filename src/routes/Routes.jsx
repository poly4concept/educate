import React from 'react'

// PACKAGES
import { Route, Switch} from 'react-router-dom'

// COMPONENTS
// import Default from '../pages/Default'
import Signup from '../pages/Signup'


const Routes = () => {
    return ( 
        <Switch>
            <Route path="/sign_up" exact component={Signup} />
            {/* <Route exact component={Default} /> */}
        </Switch>
    )
}

export default Routes