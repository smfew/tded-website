var em_version = '6.7.0';
var em_track_user = true;
var em_no_track_reason = '';

                var disableStr = 'ga-disable-UA-181230276-1';

/* Function to detect opted out users */
function __gtagTrackerIsOptedOut() {
    return document.cookie.indexOf( disableStr + '=true' ) > - 1;
}

/* Disable tracking if the opt-out cookie exists. */
if ( __gtagTrackerIsOptedOut() ) {
    window[disableStr] = true;
}

/* Opt-out function */
function __gtagTrackerOptout() {
    document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    window[disableStr] = true;
}

if ( 'undefined' === typeof gaOptout ) {
    function gaOptout() {
        __gtagTrackerOptout();
    }
}
                window.dataLayer = window.dataLayer || [];
if ( em_track_user ) {
    function __gtagTracker() {dataLayer.push( arguments );}
    __gtagTracker( 'js', new Date() );
    __gtagTracker( 'set', {
        'developer_id.dNDMyYj' : true,
                            });
    __gtagTracker( 'config', 'UA-181230276-1', {
        forceSSL:true,link_attribution:true,					} );
                        window.gtag = __gtagTracker;										(
        function () {
            /* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
            /* ga and __gaTracker compatibility shim. */
            var noopfn = function () {
                return null;
            };
            var newtracker = function () {
                return new Tracker();
            };
            var Tracker = function () {
                return null;
            };
            var p = Tracker.prototype;
            p.get = noopfn;
            p.set = noopfn;
            p.send = function (){
                var args = Array.prototype.slice.call(arguments);
                args.unshift( 'send' );
                __gaTracker.apply(null, args);
            };
            var __gaTracker = function () {
                var len = arguments.length;
                if ( len === 0 ) {
                    return;
                }
                var f = arguments[len - 1];
                if ( typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function' ) {
                    if ( 'send' === arguments[0] ) {
                        var hitConverted, hitObject = false, action;
                        if ( 'event' === arguments[1] ) {
                            if ( 'undefined' !== typeof arguments[3] ) {
                                hitObject = {
                                    'eventAction': arguments[3],
                                    'eventCategory': arguments[2],
                                    'eventLabel': arguments[4],
                                    'value': arguments[5] ? arguments[5] : 1,
                                }
                            }
                        }
                        if ( typeof arguments[2] === 'object' ) {
                            hitObject = arguments[2];
                        }
                        if ( typeof arguments[5] === 'object' ) {
                            Object.assign( hitObject, arguments[5] );
                        }
                        if ( 'undefined' !== typeof (
                            arguments[1].hitType
                        ) ) {
                            hitObject = arguments[1];
                        }
                        if ( hitObject ) {
                            action = 'timing' === arguments[1].hitType ? 'timing_complete' : hitObject.eventAction;
                            hitConverted = mapArgs( hitObject );
                            __gtagTracker( 'event', action, hitConverted );
                        }
                    }
                    return;
                }

                function mapArgs( args ) {
                    var gaKey, hit = {};
                    var gaMap = {
                        'eventCategory': 'event_category',
                        'eventAction': 'event_action',
                        'eventLabel': 'event_label',
                        'eventValue': 'event_value',
                        'nonInteraction': 'non_interaction',
                        'timingCategory': 'event_category',
                        'timingVar': 'name',
                        'timingValue': 'value',
                        'timingLabel': 'event_label',
                    };
                    for ( gaKey in gaMap ) {
                        if ( 'undefined' !== typeof args[gaKey] ) {
                            hit[gaMap[gaKey]] = args[gaKey];
                        }
                    }
                    return hit;
                }

                try {
                    f.hitCallback();
                } catch ( ex ) {
                }
            };
            __gaTracker.create = newtracker;
            __gaTracker.getByName = newtracker;
            __gaTracker.getAll = function () {
                return [];
            };
            __gaTracker.remove = noopfn;
            __gaTracker.loaded = true;
            window['__gaTracker'] = __gaTracker;
        }
    )();
                    } else {
                        console.log( "" );
    ( function () {
            function __gtagTracker() {
                return null;
            }
            window['__gtagTracker'] = __gtagTracker;
            window['gtag'] = __gtagTracker;
    } )();
                    }