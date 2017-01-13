import React from 'react';
import {render} from 'react-dom';

import "./index.scss";
import {About} from './jsx/about.jsx'
import {Menu} from './jsx/menu.jsx'
import {WorkExperience} from './jsx/work-exp.jsx'
import {
    browserHistory,
    Router,
    Route,
    Link,
    IndexRoute,
} from 'react-router';

class App extends React.Component {
    render () {
    return (
    	<main className="main">
    		<Menu/>
    	   {this.props.children}
        </main>
    )
  }
}
var routes = (
        <Router addHandlerKey={true} history={browserHistory}>
            <Route  path="/"    component={App}>
                <IndexRoute name="/"            component={About}/>
                <Route path="/men"              component={WorkExperience} />
                <Route path="/women"            component={WorkExperience}/>
                <Route path="/home-and-living"  component={WorkExperience}/>
                <Route path="/electronics"       component={WorkExperience}/>
                <Route path="/children"         component={WorkExperience}/>
                <Route path="/blog"             component={WorkExperience}/>
                <Route path="/contact"          component={WorkExperience}/>
            </Route>
        </Router>
);

render(routes, document.getElementById('app'));

