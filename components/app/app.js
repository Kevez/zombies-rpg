(function () {
    'use strict';

    app.component('app', {
        templateUrl: 'components/app/app.html',
        controllerAs: 'AppCtrl',
        controller: ['EventManager', function (EventManager) {
            this.stage = 1;

            EventManager.subscribe('stage:changed', function (newStage) {
                this.stage = newStage;
            }, this);
        }]
    });
})();
