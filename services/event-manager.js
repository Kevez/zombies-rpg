(function () {
    'use strict';

    app.factory('EventManager', [function () {
        var subscriptions = [];

        return {
            subscribe: function (eventName, callback, context) {
                subscriptions.push({
                    eventName: eventName,
                    callback: callback,
                    context: context
                });
            },

            publish: function (eventName, args) {
                var index = subscriptions.length;

                console.log('publish', eventName, args);

                while (index--) {
                    if (subscriptions[index].eventName === eventName) {
                        subscriptions[index].callback.call(subscriptions[index].context, args);
                    }
                }
            }
        }
    }]);
})();