import * as ActionTypes from 'ActionTypes';

export const getReceivedArticlesAction = (articles) => {
    return {
        type:       ActionTypes.RECEIVED_ARTICLES,
        articles
    }
};

export const getReceivedAboutMeAction = (content) => {
    return {
        type: ActionTypes.RECEIVED_ABOUT_ME,
        content
    }
};

export const getReceivedAPIDataAction = (dataSet, endpoint) => {
    return {
        type: ActionTypes.RECEIVED_API_DATA,
        endpoint,
        dataSet
    }
};

export const getFinishedURLChangeAction = (url) => {
    return {
        type: ActionTypes.CHANGE_URL_FINISHED,
        url
    }
};

export const getSendAPIRequestAction = (endpoint) => {
    return {
        type: ActionTypes.API_REQUEST_SEND,
        endpoint
    };
};