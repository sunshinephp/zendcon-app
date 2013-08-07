define([], function() {
    'use strict';

    var ZC = window.ZC || {};

    ZC.defaultImg = function(img) {
        img.src = '/images/speakers/default.png';
    };

    ZC.nukeImg = function(img) {
        var parent = img.parentElement;
        parent.parentElement.removeChild(parent);
    };

    ZC.nuke = function() {
        for (var key in localStorage) {
            localStorage.removeItem(key);
        }
    };

    return ZC;
});
