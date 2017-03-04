import AboutMe from 'AboutMe';
import CV from 'CV';

export const BLOG_NAME =        'Huge Data Guy';
export const BLOG_DESCRIPTION = 'Everything about scalable architectures.';
export const LOGO_URL =         '';

export const NAVIGATION_ELEMENTS = [
    {
        name: 'About this blog',
        container: AboutMe,
        path: '/about-me',
    },
    {
        name: 'CV',
        container: CV,
        path: '/my-cv'
    }
];