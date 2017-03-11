import AboutMe from 'AboutMe';
import CV from 'CV';
import BlogFrontPage from 'BlogFrontPage';

export const BLOG_NAME =        'Huge Data Guy';
export const BLOG_DESCRIPTION = 'Everything about scalable architectures.';
export const LOGO_URL =         '';

export const NAVIGATION_ELEMENTS = [
    {
        name: 'Blog',
        title: '',
        description: '',
        container: BlogFrontPage,
        path: '/'
    },
    {
        name: 'About this blog',
        title: '',
        description: '',
        container: AboutMe,
        path: '/about-me',
    },
    {
        name: 'CV',
        title: '',
        description: '',
        container: CV,
        path: '/my-cv'
    }
];