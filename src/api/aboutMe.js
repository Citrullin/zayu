import _aboutMe from './aboutMe.json';
import APIEndpointConfigurations from 'APIEndpointConfiguration';

const TIMEOUT = 200;

export default {
    getAboutMeContent(callBack, timeout){
        setTimeout(() =>
            callBack(_aboutMe, APIEndpointConfigurations.v1.GET_ABOUT_ME), timeout || TIMEOUT);
    }
}