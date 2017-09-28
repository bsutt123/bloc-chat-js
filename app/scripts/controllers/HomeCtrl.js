(function() {
    function HomeCtrl(Room) {
        var self = this
        self.rooms = Room.all

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
