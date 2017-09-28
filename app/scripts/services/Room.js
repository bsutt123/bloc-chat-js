(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref();
        var rooms = $firebaseArray(ref.child("rooms"));

        Room.all = rooms;
        Room.add = function(roomName) {
            rooms.$add(roomName);
        }
        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room',['$firebaseArray', Room]);
})();
