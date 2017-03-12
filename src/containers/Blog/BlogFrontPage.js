import Inferno from 'inferno';
import Component from 'inferno-component';
import connect from 'inferno-redux';

import ArticleThumbnailList from '../../components/Article/ArticleThumbnailList';

export default class BlogFrontPage extends Component{
    render(){
        return (
            <div class="blogFrontpage o-grid-xs-24">
                Blog Frontpage
                <h2>Article</h2>
                <ArticleThumbnailList/>
            </div>
        );
    }
}



