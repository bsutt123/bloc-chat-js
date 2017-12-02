(function() {
    function ModalCtrl($uibModalInstance) {
        var self = this;

        self.closeModal = function(input) {
            if (input && input !== "") {
                $uibModalInstance.close(input);
            }
  
        };

        self.dismissModal = function() {
            $uibModalInstance.dismiss();
        }
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);
})();
