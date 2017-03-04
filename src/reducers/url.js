/*
 action = {type: 'DELETE_ARTICLE_FILTER_RULE', name: 'sport'}
 action = {type: 'ADD_ARTICLE_FILTER_RULE', name: 'sport'}
 */
import * as ActionTypes from 'ActionTypes';

const URLStates = {
    STARTED: 'URL_RENDERING_STARTED',
    WAITING_FOR_API: 'WAITING_FOR_API_RESPONSE',
    READY: 'URL_RENDERED'
};

export const updateURL = (state = {url: '', state: URLStates.READY}, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_URL_STARTED:
            return {
                url: action.url,
                state: URLStates.STARTED
            };
            break;
        case ActionTypes.API_REQUEST_SEND:
            return {
                url: action.url,
                state: URLStates.WAITING_FOR_API
            };
            break;
        case ActionTypes.CHANGE_URL_FINISHED:
            return {
                url: action.url,
                state: URLStates.READY
            };
            break;
        default:
            return state;
    }
};

export const getURL = (state) => {
    return state.url;
};