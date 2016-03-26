(function () {
    'use strict';

    app.factory('Timer', [function () {
        //var localStats,
        //    baseStats = {
        //        currency: 1000,
        //        level: 1,
        //        exp: 0,
        //        expToLevel: 5,
        //        health: 100,
        //        energy: 10,
        //        maxEnergy: 10,
        //        stamina: 3,
        //        maxStamina: 3
        //    };
        //
        //return {
        //    getData: function () {
        //        if (!window.localStorage.getItem('stats')) {
        //            window.localStorage.setItem('stats', JSON.stringify(baseStats));
        //        }
        //
        //        localStats = JSON.parse(window.localStorage.getItem('stats'));
        //        return localStats;
        //    },
        //
        //    getStat: function (stat) {
        //        return localStats[stat];
        //    },
        //
        //    incrementStat: function (stat, incrementBy) {
        //        Object.keys(localStats).forEach(function (key) {
        //            if (stat === key) {
        //                var newValue = localStats[key] + incrementBy;
        //                localStats[key] = newValue;
        //                //EventManager.publish('stats:' + key, newValue);
        //            }
        //        });
        //
        //        window.localStorage.setItem('stats', JSON.stringify(localStats));
        //    },
        //
        //    setStat: function (stat, value) {
        //        localStats[stat] = value;
        //        window.localStorage.setItem('stats', JSON.stringify(localStats));
        //    }
        //}
    }]);
})();
