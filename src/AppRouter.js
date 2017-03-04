import Inferno from 'inferno';
import Component from 'inferno-component';
import { Router, Route, browserHistory } from 'inferno-router';
import { Provider } from 'inferno-redux';

import App from 'App';

import * as BlogConfigurations from 'BlogConfigurations';

import {store} from 'store';

class AppRouterHelper{
    static getRoutesByNavigationConfiguration(configuration){
        return configuration.map(element => {
            return <Route path={ element.path } component={ element.container }/>
        });
    };
}

export default class AppRouter extends Component{
    render(){
        return(
            <Provider store={ store }>
                <Router history={browserHistory} component={ App }>
                    {
                        AppRouterHelper
                            .getRoutesByNavigationConfiguration(BlogConfigurations.NAVIGATION_ELEMENTS)
                    }
                </Router>
            </Provider>
        );
    }
}