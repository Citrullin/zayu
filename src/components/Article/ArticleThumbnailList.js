import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect }  from 'inferno-redux';

import {getVisibleArticleList, updateArticleList} from 'articleListReducers';
import ArticleThumbnailContainer from './Thumbnail/ArticleThumbnailContainer';

class ArticleThumbnailList extends Component{
    static _renderArticle(article){
        return (
            <ArticleThumbnailContainer data={ article } />
        )
    };

    render(){
        const store = this.context.store;

        let elements = [];
        store.getState().articles.forEach(article =>{
            elements.push(this._renderArticle(article));
        });

        return (<div class="articleThumbnailList">{elements}</div>);
    }
}

const mapStateToProps = (state) => {
    return {
        articles: getVisibleArticleList(state)
    }
};

export default connect(
    mapStateToProps,
    { updateArticleList }
)(ArticleThumbnailList)