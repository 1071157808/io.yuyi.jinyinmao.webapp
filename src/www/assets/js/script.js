'use strict';
if (window.location.protocol === 'http:') {
    window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}
