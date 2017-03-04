/*
 action = {type: 'DELETE_ARTICLE_FILTER_RULE', name: 'sport'}
 action = {type: 'ADD_ARTICLE_FILTER_RULE', name: 'sport'}
 */
import * as ActionTypes from 'ActionTypes';

let emptyArticleList = [
    {
        name: '',
        url: '',
        headline: '',
        description: '',
        imageUrl: '',
        tags: [],
        show: false
    }
];

const getModifiedArticleByAddedTag = (articles, tag) => articles.map(article => {
    article.show = article.tags.map(articleTag => {
            if (articleTag == tag) {
                return false
            }
        }) || true;
});

export const updateArticleList = (state = emptyArticleList, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_URL_STARTED:
            return emptyArticleList;
        case ActionTypes.ADD_ARTICLE_FILTER_RULE:
            return getModifiedArticleByAddedTag(state.articles, action.name);
        case ActionTypes.RECEIVED_ARTICLES:
            return action.articles;
        default:
            return state;
    }
};

export const getVisibleArticleList = (state) => {
    return state.articles.filter(article => {
        return article.show;
    });
};