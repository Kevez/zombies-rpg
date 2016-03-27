(function () {
    'use strict';

    app.component('home', {
        templateUrl: 'components/home/template.html',
        controllerAs: 'HomeCtrl',
        controller: [function () {
            console.log('home component');
        }]
    });
})();
