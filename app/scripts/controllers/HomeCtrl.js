(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
        var self = this
        self.rooms = Room.all;
        self.currentRoom = null;
        self.currentRoomName='';

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

        self.createNewMessage = function(message) {
            console.log(message);
        }
    };
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message',"$cookies", HomeCtrl]);
})();
