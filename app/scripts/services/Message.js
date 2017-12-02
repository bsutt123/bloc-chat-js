(function() {
    function Message($firebaseArray) {
        var Message = {}
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getMessagesByRoom = function(roomID) {
            var roomMessages = $firebaseArray(ref.orderByChild("roomID").equalTo(roomID));
            return roomMessages;
        }

        Message.createNewMessage = function(messageObject) {
            messages.$add(messageObject);
        }
        return Message

    };

    angular
        .module('blocChat')
        .factory('Message',['$firebaseArray', Message]);
})();
