(function () {
    'use strict';

    app.component('stage', {
        templateUrl: 'components/stage/stage.html',
        bindings: {
            stage: '='
        },
        controllerAs: 'StageCtrl',
        controller: [function () {
            console.log('stage component', this.stage);
        }]
    });
})();
