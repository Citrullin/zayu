export const getReceivedArticlesAction = (articles) => {
    return {
        type:       ActionTypes.RECEIVED_ARTICLES,
        articles
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