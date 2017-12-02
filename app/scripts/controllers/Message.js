(function() {
        function Message($firebaseArray) {
            var Message = {}
            var ref = firebase.database().ref().child("messages");
    
            Message.getMessagesByRoom = function(roomID) {
                var roomMessages = $firebaseArray(ref.orderByChild("roomID").equalTo(roomID));
                return roomMessages;
            }
            
            Message.
            return Message
    
        };
    
        angular
            .module('blocChat')
            .factory('Message',['$firebaseArray', Message]);
    })();