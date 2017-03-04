import _articles from './article.json';
import * as APIEndpoint from 'APIEndpointConfiguration';

const TIMEOUT = 200;

export default {
    getArticles(callBack, pageNumber, timeout){
        setTimeout(() =>
            callBack(_articles, APIEndpoint.v1.GET_PAGE_ARTICLES + pageNumber), timeout || TIMEOUT);
    },
    getFrontPageArticles(callBack, timeout){
        setTimeout(() => callBack(_articles), timeout || TIMEOUT);
    }
}