import Inferno from 'inferno';
import Logo from './Logo'

const BlogHeader = ({ data }) => (
    <div class="o-grid-xs-6 header">
        <Logo data={ data.logo }/>
        <div class="o-grid-xs-6 header__title">{ data.title }</div>
        <div class="o-grid-xs-6 header__description">{ data.description }</div>
    </div>
);

export default BlogHeader;