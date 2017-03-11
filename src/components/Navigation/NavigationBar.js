import Inferno from 'inferno';
import Component from 'inferno-component';

export default class NavigationBar extends Component{
    render(){
        return (<nav class="navigation-bar">{this.props.children}</nav>);
    }
}