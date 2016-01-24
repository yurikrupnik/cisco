export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('main.details', {
      url: ':id',
      templateUrl: 'app/main/details/details.html',
      controllerAs: 'vm',
      bindToController: true,
      controller: 'DetailsController',
      params: {
        widget: {},
        index: -1
      },
      resolve: {
        widget: function($stateParams) {
          return $stateParams.widget;
        },
        index: function($stateParams) {
          return $stateParams.index;
        }
      }
    })
    .state('edit', {
      url:'/edit/:id',
      templateUrl: 'app/edit/edit.html',
      controllerAs: 'vm',
      controller: 'EditController',
      bindToController: true,
      params: {
        widget: {},
        index: -1
      },
      resolve: {
        widget: function($stateParams) {
          return $stateParams.widget;
        },
        index: function($stateParams) {
          return $stateParams.index
        }
      }
    });
  $urlRouterProvider.otherwise('/');
}
