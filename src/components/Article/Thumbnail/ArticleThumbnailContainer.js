import Inferno from 'inferno';

import {Image} from './Image';
import Description from './Description';

const ArticleThumbnailContainer = ({ data }) => (
    <div class="articleThumbnail">
        <Image src={ data.imageUrl }/>
        <Description>
            { data.description }
        </Description>
    </div>
);

export default ArticleThumbnailContainer;