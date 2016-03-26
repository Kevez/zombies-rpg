(function () {
    'use strict';

    app.component('navigation', {
        templateUrl: 'components/navigation/navigation.html',
        controllerAs: 'NavigationCtrl',
        controller: ['EventManager', function (EventManager) {
            this.links = [
                'Home',
                'Quests',
                'Battle',
                'Recruit'
            ];

            this.changeLocation = function (locationId) {
                EventManager.publish('location:changed', locationId);
            };
        }]
    });
})();
