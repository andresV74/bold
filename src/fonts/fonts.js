import { createGlobalStyle } from 'styled-components';

import montserratRegularWoff from './montserrat-regular.woff';
import montserratRegularWoff2 from './montserrat-regular.woff2';
import montserratMediumWoff from './montserrat-medium.woff';
import montserratMediumWoff2 from './montserrat-medium.woff2';
import montserratBoldWoff from './montserrat-bold.woff';
import montserratBoldWoff2 from './montserrat-bold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(${montserratRegularWoff2}) format('woff2'),
        url(${montserratRegularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat Medium';
        src: local('Montserrat Medium'), local('MontserratMedium'),
        url(${montserratMediumWoff2}) format('woff2'),
        url(${montserratMediumWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat Bold';
        src: local('Montserrat Bold'), local('MontserratBold'),
        url(${montserratBoldWoff2}) format('woff2'),
        url(${montserratBoldWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;