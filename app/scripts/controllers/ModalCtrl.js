(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        var self = this;

        self.closeModal = function(newRoomName) {
            console.log('The new room name will be '+newRoomName)
            $uibModalInstance.close(newRoomName);
        };

        self.dismissModal = function() {

            $uibModalInstance.dismiss();
        }
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
