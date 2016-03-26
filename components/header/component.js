(function () {
    'use strict';

    app.component('header', {
        templateUrl: 'components/header/template.html',
        controllerAs: 'HeaderCtrl',
        controller: ['EventManager', function (EventManager) {
            console.log('header component');
        }]
    });
})();
