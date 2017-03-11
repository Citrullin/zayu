import * as ActionTypes from 'ActionTypes';
import APIEndpointConfigurations from 'APIEndpointConfiguration';


import ArticleAPI from 'ArticleAPI';
import AboutMeAPI from 'AboutMeAPI';

import * as ActionTypeCreator from 'ActionTypeCreationHelper';

/*
 * changeUrl DataSet structure:
 * {
 *   url: "a/path"
 * }
 *
 */

class URLChangeFlowHandler {

    static _isValidOverviewPage(path) {
        let pathArray = path.split('/');
        return pathArray.length === 3 && !isNaN(pathArray[2])
    };

    static _processPageFlow(urlDataSet, dispatch, getState) {
        let pageNumber = urlDataSet.url.split('/')[2];
        let endpoint = APIEndpointConfigurations.v1.GET_PAGE_ARTICLES + pageNumber;

        ArticleAPI.getArticles((articles, endpoint) => {
            dispatch(ActionTypeCreator.getReceivedAPIDataAction(articles, endpoint));
            dispatch(ActionTypeCreator.getReceivedArticlesAction(articles));
            window.browserHistory.push(urlDataSet.url);
            dispatch(ActionTypeCreator.getFinishedURLChangeAction(urlDataSet.url));
        }, pageNumber);

        dispatch(ActionTypeCreator.getSendAPIRequestAction(endpoint));
    };

    static _processFrontPageFlow(urlDataSet, dispatch, getState) {
        let endpoint = APIEndpointConfigurations.v1.GET_PAGE_ARTICLES + 1;
        ArticleAPI.getFrontPageArticles(articles => {
            dispatch(ActionTypeCreator.getReceivedArticlesAction(articles));
            window.browserHistory.push(urlDataSet.url);
        });

        dispatch(ActionTypeCreator.getSendAPIRequestAction(endpoint));
    };

    static _processAboutMeFlow(urlDataSet, dispatch, getState) {
        AboutMeAPI.getAboutMeContent(content => {
            dispatch(ActionTypeCreator.getReceivedAboutMeAction(content));
            window.browserHistory.push(urlDataSet.url);
            dispatch(ActionTypeCreator.getFinishedURLChangeAction(urlDataSet.url));
        });
    };

    static changeURL(urlDataSet) {
        return (dispatch, getState) => {
            dispatch({
                type: ActionTypes.CHANGE_URL_STARTED,
                url: urlDataSet.url
            });

            if (urlDataSet.url.startsWith('/page/') && this._isValidOverviewPage(urlDataSet.url)) {
                this._processPageFlow(urlDataSet, dispatch, getState);
            } else if (urlDataSet.url == ('/about-me' || '/about-me/')) {
                this._processAboutMeFlow(urlDataSet, dispatch, getState);
            } else if (urlDataSet.url == ('' || '/')) {
                this._processFrontPageFlow(urlDataSet, dispatch, getState);
            }
        }
    }
}


export default URLChangeFlowHandler