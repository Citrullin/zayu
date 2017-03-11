import Inferno from 'inferno';

const Image = ({ src, alt }) => (
    <img class="article-thumbnail__image" src={ src } alt={ alt }/>
);

export default Image;

