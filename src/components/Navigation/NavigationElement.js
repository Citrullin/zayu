import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';

import URLChangeFlowHandler from 'URLChangeFlowHandler';

const InitTypes = {
  NAV_CLICK: "NAV_ELEMENT_CLICK"
};

class NavigationElement extends Component{
    _clickHandler(event){
        let dispatchContent = URLChangeFlowHandler.changeURL({
            initType: InitTypes.NAV_CLICK,
            url:  this.props.data.path
        });

        this.props.dispatch(dispatchContent);
    }

    render(){
        return (
            <a class="navigation-bar__element" onClick={ this._clickHandler.bind(this) }>
                {this.props.data.name}
            </a>
        );
    }
}

export default connect()(NavigationElement);