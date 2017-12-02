(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/user-modal.html',
                size: 'lg',
                controller: 'ModalCtrl as modal',
                backdrop: 'static'
            });

            modalInstance.result
                .then( function(newUserName) {
                    $cookies.put('blocChatCurrentUser', newUserName); })
                .catch( function(reason) {
                    console.log("Promise was reject because "+reason);
                })
            currentUser = $cookies.get('blocChatCurrentUser');
        }
    }   
  
  
  
    angular
      .module('blocChat')
      .run(['$cookies', '$uibModal', BlocChatCookies ]);
  })();