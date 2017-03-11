import Inferno from 'inferno';
import Component from 'inferno-component';
import { Router, Route, IndexRoute } from 'inferno-router';

import createBrowserHistory from 'history/createBrowserHistory';

import { Provider } from 'inferno-redux';
import BlogFrontPage from 'BlogFrontPage';

import App from 'App';

import * as BlogConfigurations from 'BlogConfigurations';

import {store} from 'store';

window.browserHistory = createBrowserHistory();

class AppRouterHelper{
    static getRoutesByNavigationConfiguration(configuration){
        return configuration.map(element => {
            if(element.container !== BlogFrontPage){
                return <Route path={ element.path } component={ element.container }/>
            }
        });
    };
}

const AppRouter = () => (
    <Provider store={ store }>
        <Router history={ window.browserHistory }>
            <Route component={ App }>
                <IndexRoute component={ BlogFrontPage }/>
                {
                    AppRouterHelper
                        .getRoutesByNavigationConfiguration(BlogConfigurations.NAVIGATION_ELEMENTS)
                }
            </Route>
        </Router>
    </Provider>
);

export default AppRouter