import Inferno from 'inferno';
import Component from 'inferno-component';

export default class NavigationBar extends Component{
    render(){
        return (<nav class="o-grid-xs-6 c-navigation-bar">{this.props.children}</nav>);
    }
}