(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        var self = this
        self.rooms = Room.all

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
            console.log(self.currentRoomMessages)

        };
    };
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
