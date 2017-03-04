import Inferno from 'inferno';

const Logo = ({ data }) => (
    <div class="logo"><img class="logo__image" src={data.imageUrl}/></div>
);

export default Logo;