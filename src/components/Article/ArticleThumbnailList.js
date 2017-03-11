import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect }  from 'inferno-redux';

import {getVisibleArticleList, updateArticleList} from 'articleListReducer';
import ArticleThumbnailContainer from './Thumbnail/ArticleThumbnailContainer';

class ArticleThumbnailList extends Component{
    _renderArticle(article){
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

        return (<section><div class="article-thumbnail-list">{elements}</div></section>);
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