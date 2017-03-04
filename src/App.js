import Inferno from 'inferno';
import Component from 'inferno-component';

import * as BlogConfigurations from 'BlogConfigurations';

import NavigationBar from 'NavigationBar';
import NavigationBarElement from 'NavigationBarElement';
import BlogHeader from 'BlogHeader';

class AppHelper{

    static getBlogHeader(){
        const blogHeaderData = {
            logo: { imageUrl: BlogConfigurations.LOGO_URL },
            title: BlogConfigurations.BLOG_NAME,
            description: BlogConfigurations.BLOG_DESCRIPTION
        };

        return <BlogHeader data={ blogHeaderData }/>
    }

    static getNavigationBar (){
        return (
            <NavigationBar>
                {
                    BlogConfigurations.NAVIGATION_ELEMENTS.map(element => {
                        return <NavigationBarElement name={ element.name } container={ element.container }/>
                    })
                }
            </NavigationBar>
        )
    }
}

export default class App extends Component {
    render(){
        return(
            <div>
                { AppHelper.getBlogHeader() }
                { AppHelper.getNavigationBar() }
                {/* Following is the content of the current page. dynamic inserted. */}
                { this.props.children }
            </div>
        );
    }
}