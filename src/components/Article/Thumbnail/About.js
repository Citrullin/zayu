import Inferno from 'inferno';

const About = ({ data ,children }) => (
    <div class="article-thumbnail__autor">
        <address>Written by <a href="">{ data.name }</a></address>
        <time datetime={ data.datetime }>{ data.display_datetime }</time>
    </div>
);

export default About