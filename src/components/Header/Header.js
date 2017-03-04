import Inferno from 'inferno';
import Logo from './Logo'

const BlogHeader = ({ data }) => (
    <header>
        <Logo data={ data.logo }/>
        <div class="header__title">{ data.title }</div>
        <div class="header__description">{ data.description }</div>
    </header>
);

export default BlogHeader;