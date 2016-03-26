(function () {
    'use strict';

    app.component('timer', {
        templateUrl: 'components/timer/template.html',
        controllerAs: 'TimerCtrl',
        controller: ['$interval', 'EventManager', function ($interval, EventManager) {
            var timerTick;

            this.seconds = 100;

            function updateTimer() {
                this.seconds--;

                if (this.seconds <= 0) {
                    $interval.cancel(timerTick);
                }
            }

            function startTimer() {
                timerTick = $interval(updateTimer.bind(this), 1000);
            }

            EventManager.subscribe('stage:changed', function (newStage) {
                if (newStage === 2) {
                    startTimer.call(this);
                }
            }, this);
        }]
    });
})();
