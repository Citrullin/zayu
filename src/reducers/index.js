import { updateArticleList } from './articleList';
import { updateURL } from './url';
import { combineReducers } from 'redux';
//import multireducers from 'multi';
//import {reducer as reduxAsyncConnect } from 'redux-a';

export default combineReducers({
    articles: updateArticleList,
    url: updateURL
});
