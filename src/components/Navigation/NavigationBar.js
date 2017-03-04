import Inferno from 'inferno';
import Component from 'inferno-component';

export default class NavigationBar extends Component{
    render(){
        return (<ul class="navigation-bar">{this.props.children}</ul>);
    }
}