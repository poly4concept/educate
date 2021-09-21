import React from 'react'

// PACKAGES
import { Route, Switch} from 'react-router-dom'


// COMPONENTS
import Default from '../pages/Default'
import HomePage from '../pages/HomePage'
import Landing from '../pages/Landing'
import Question from '../pages/Question'
import Material from '../pages/Material'
import Contact from '../pages/Contact'

const Routes = () => {
    return (  
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/material" exact component={Material} />
            <Route path="/question" exact component={Question} />
            <Route path="/contact" exact component={Contact} />
            <Route exact component={Default} />
        </Switch>
    )
}

export default Routes