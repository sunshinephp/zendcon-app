define(['underscore', 'jquery'], function(_, $) {
    'use strict';

    var removeLoading = function() {
        $('.stream-loader').remove();
    };

    var StreamCtrl = function() {
        this.init();
    };

    _.extend(StreamCtrl.prototype, {
        init: function() {},

        render: function() {
            // Window dimensions?
            var height = window.innerHeight - 45
              , width  = window.innerWidth;

            (function(doc, tag, id) {
                var a = doc.getElementsByClassName('twitter-timeline')[0]
                  , fjs  = doc.getElementsByTagName(tag)[0]
                  , prot = /^http:/.test(doc.location) ? 'http' : 'https'
                  , js;

                a.setAttribute('height', height);
                a.setAttribute('width',   width);

                if (window.twttr) {
                    window.twttr.widgets.load(doc.getElementById('content'));
                    removeLoading();
                } else {
                    js = doc.createElement(tag);
                    js.id = id;
                    js.src = prot + '://platform.twitter.com/widgets.js';
                    js.onload = removeLoading;
                    fjs.parentNode.insertBefore(js, fjs);
                }
            })(document, 'script', 'twitter-wjs');
        }
    });

    return StreamCtrl;
});
