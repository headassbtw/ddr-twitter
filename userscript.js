// ==UserScript==
// @name          DDR Twitter
// @version       0.0.1
// @description   Replaces icons with DDR arrows
// @author        headassbtw
// @license       MIT
// @match         https://twitter.com/*
// @exclude       https://twitter.com/i/cards/*
// @exclude       https://twitter.com/i/release_notes
// @exclude       https://twitter.com/*/privacy
// @exclude       https://twitter.com/*/tos
// @exclude       https://twitter.com/account/access
// @updateURL     https://raw.githubusercontent.com/headassbtw/ddr-twitter/main/userscript.js
// @downloadURL   https://raw.githubusercontent.com/headassbtw/ddr-twitter/main/userscript.js
// ==/UserScript==

(function() {
    'use strict';

    let masterStyle = document.createElement('style');
    masterStyle.type = 'text/css';
    masterStyle.id = 'testerino2';
    masterStyle.innerHTML = '[data-testid=tweet] [role=group] [role=button] svg path {transform-origin: 50%; d: path("m 2.096,17.404 h 7.465 v 5.330602 c 0,0.108 0.044,0.286 0.12,0.403 0.142,0.225 0.384,0.347 0.632,0.347 0.138,0 0.277,-0.038 0.402,-0.118 3.528417,-3.055572 8.956653,-8.783658 9.891722,-9.695164 H 2.096 Z m 8.965,3.955602 V 16.67 c 0,-0.414 -0.335075,-0.742104 -0.75,-0.75 L 9.915,15.9125 c -2.8569203,0 -2.3503754,-0.02006 -6.3180625,-0.02006 v -2.221 H 18.821975 C 17.91033,14.589479 16.804537,15.952776 11.061,21.359602 Z M 2.0966798,9.9364734 l 7.4649999,0.00136 9.705e-4,-5.3306019 c 1.96e-5,-0.108 0.044052,-0.285992 0.1200734,-0.4029782 0.1420409,-0.2249741 0.3840634,-0.3469301 0.6320634,-0.3468849 0.138,2.51e-5 0.276993,0.03805 0.401978,0.1180732 3.527861,3.0562143 8.955054,8.7852883 9.889957,9.6969643 L 2.0960002,13.669035 Z M 11.0624,5.9825036 11.061546,10.672106 c -7.5e-5,0.414 -0.33521,0.742043 -0.750137,0.749863 l -0.3960009,0.0074 c -2.8569202,-5.2e-4 -2.350379,0.01963 -6.318066,0.01891 l -4.044e-4,2.221 15.2250373,0.0028 C 17.910497,12.753874 16.804952,11.390375 11.0624,5.9825036 Z");}';
    document.head.appendChild(masterStyle);

    let likeStyle = document.createElement('style');
    likeStyle.type = 'text/css';
    likeStyle.id = 'likestyles';
    likeStyle.innerHTML = '[data-testid=tweet] [data-testid=like] svg path,[data-testid=tweet] [data-testid=unlike] svg path  {transform: rotate(270deg); }';
    document.head.appendChild(likeStyle);

    let replyStyle = document.createElement('style');
    replyStyle.type = 'text/css';
    replyStyle.id = 'replyStyle';
    replyStyle.innerHTML = '[data-testid=tweet] [data-testid=reply] svg path {transform: rotate(180deg); }';
    document.head.appendChild(replyStyle);

    let retweetStyle = document.createElement('style');
    retweetStyle.type = 'text/css';
    retweetStyle.id = 'retweetStyle';
    retweetStyle.innerHTML = '[data-testid=tweet] [data-testid=retweet] svg path, [data-testid=tweet] [data-testid=unretweet] svg path  {transform: rotate(90deg); }';
    document.head.appendChild(retweetStyle);



})();
