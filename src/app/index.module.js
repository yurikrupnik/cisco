///* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { EditController } from './edit/edit.controller';
import { DetailsController } from './main/details/details.controller';
//import { NavbarDirective } from '../app/components/navbar/navbar.directive';
//import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('cisco', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'toastr',
    'ngStorage','angular-confirm'
  ])
  //.constant('malarkey', malarkey)
  //.constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  //.service('githubContributor', GithubContributorService)
  //.service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('EditController', EditController)
  .controller('DetailsController', DetailsController);
