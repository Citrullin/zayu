import Inferno from 'inferno';
import Component from 'inferno-component';

export default class NavigationElement extends Component{
    render(){
        return (
            <li class="navigation-bar__element">{this.props.name}</li>
        );
    }
}