import Inferno from 'inferno';
import Component from 'inferno-component';

export default class BlogPost extends Component{

    render(){
        const store = this.context.store;
        const state = store.getState();
        
        return (
            <div>
                Blog Post
            </div>
        );
    }
}