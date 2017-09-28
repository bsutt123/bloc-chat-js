(function() {
    function HomeCtrl(Room, $uibModal) {
        var self = this
        self.rooms = Room.all

        self.openRoomModal = function() {

            var modalInstance = $uibModal.open({
                templateUrl: "/templates/modal.html",
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
        }
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
