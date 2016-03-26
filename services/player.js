(function () {
    'use strict';

    angular.module('app')
        .factory('Player', ['EventManager', function (EventManager) {

            var stats = {
                username: 'Kev',
                level: 1,
                exp: 5
            };

            return {
                getStats: function () {
                    return stats;
                },

                levelUp: function () {
                    EventManager.publish('player:level');
                }
            }
        }])
})();