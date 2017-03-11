import Inferno from 'inferno';

import Image from './Image';
import Headline from './Headline';
import About from './About';
import Description from './Description';

const ArticleThumbnailContainer = ({ data }) => (
<div class="article-thumbnail">
    <article>
        <Image src={ data.image.url } alt={ data.image.description }/>
        <header>
            <Headline>{ data.headline }</Headline>
            <About data={ data.about }/>
        </header>
        <Description>
            { data.description }
        </Description>
    </article>
</div>
);

export default ArticleThumbnailContainer;