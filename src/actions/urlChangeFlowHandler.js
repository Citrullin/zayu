import * as ActionTypes from 'ActionTypes';
import * as APIEndpoint from 'APIEndpointConfiguration';

import * as actions from 'actions';
import { browserHistory } from 'inferno-router';

import ArticleAPI from 'ArticleAPI';

import * as ActionTypeCreator from 'ActionTypeCreationHelper';

function isValidOverviewPage(path){
    let pathArray = path.split('/');
    return pathArray.length === 3 && !isNaN(pathArray[2])
}

function processPageFlow(pageNumber, dispatch, getState){
    let endpoint = APIEndpoint.v1.GET_PAGE_ARTICLES + pageNumber;

    ArticleAPI.getArticles((articles, endpoint) => {
        dispatch(ActionTypeCreator.getReceivedAPIDataAction(articles, endpoint));
        dispatch(ActionTypeCreator.getReceivedArticlesAction(articles));
        browserHistory.routeTo(urlDataSet.url);
        dispatch(ActionTypeCreator.getFinishedURLChangeAction(urlDataSet.url));
    }, pageNumber);

    dispatch(ActionTypeCreator.getSendAPIRequestAction(endpoint));
}

function processFrontPageFlow(dispatch, getState){
    let endpoint = APIEndpoint.v1.GET_PAGE_ARTICLES + 1;
    ArticleAPI.getFrontPageArticles(articles => {
        dispatch(ActionTypeCreator.getReceivedArticlesAction(articles));
    });

    dispatch(ActionTypeCreator.getSendAPIRequestAction(endpoint));
}

export default function changeURL(urlDataSet){
    return (dispatch, getState) => {
        dispatch({
            type:   ActionTypes.CHANGE_URL_STARTED,
            url:    urlDataSet.url
        });

        if(urlDataSet.url.startsWith('/page/') && isValidOverviewPage(urlDataSet.url)){
            processPageFlow(urlDataSet.url.split('/')[2], dispatch, getState);
        }else if(urlDataSet.url == ('/about-me' || '/about-me/')){

        }else if(urlDataSet.url == ('' || '/')){
            processFrontPageFlow(dispatch, getState);
        }
    }
}