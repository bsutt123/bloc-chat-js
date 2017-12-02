(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
        var self = this
        self.rooms = Room.all;
        self.currentRoom = null;
        self.currentRoomName='';
        self.newMessageInput='';

        self.convertTime = function(time) {
            const d = new Date(time);
            const stringDate = d.toString();
            if (stringDate === "Invalid Date") {
                return ""
            } else {
                return stringDate;
            }
        }
        self.openRoomModal = function() {

            var modalInstance = $uibModal.open({
                templateUrl: "/templates/room-modal.html",
                size: 'lg',
                controller: 'ModalCtrl as modal',
                backdrop: true,
            });

            modalInstance.result
                .then( function(newRoomName) {
                Room.add(newRoomName) })
                .catch( function(reason) {
                    console.log("You closed because of "+reason)
                })
        };

        self.setActiveRoom = function(room) {
            self.currentRoomMessages = Message.getMessagesByRoom(room.$id);
            self.currentRoom = room;
            self.currentRoomName = room.$value;

        };

        self.createNewMessage = () => {
            if (self.currentRoom === null) {
                alert("You have to pick a room first!");
            } else {
                const newMessage = self.newMessageInput;
                const currentUser = $cookies.get('blocChatCurrentUser');
                const now = new Date;
                const dateString = now.toDateString()
                const messageObject = {
                    content: newMessage,
                    username: currentUser,
                    time: dateString,
                    roomID: self.currentRoom.$id
                }
                self.newMessageInput="";
                Message.createNewMessage(messageObject);
            }

        }
    };
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message','$cookies', HomeCtrl]);
})();
