export class MainController {
  constructor ($localStorage, $state) {
    'ngInject';

    //$localStorage.$reset();
    this.$state = $state;
    this.$localStorage = $localStorage;

    this.widgets = this.$localStorage.widgets || (this.$localStorage.widgets = [
        {name: 'create name for 1', id: 1, keys: [{key: 'nir1', val: 'tal1'}]},
        {name: 'create name for 2', id: 2, keys: [{key: 'nir2', val: 'tal2'}]}
      ]);
  }

  // pass the js object that is bind with the view and local storage data
  // todo should be in service for local storage api - widgets
  // remove from local storage
  remove(list = [], index) {
    list.splice(index, 1);
  }

  showDetails(id, widget, index) {
    this.$state.go('main.details', {id, widget, index});
  }
}
