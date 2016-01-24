export class EditController {
  constructor (widget, index, $state, $localStorage) {
    'ngInject';

    this.$state = $state;
    this.$localStorage = $localStorage;

    // already defined in main controller todo module for local storage
    this.widgets = this.$localStorage.widgets;
    this.index = index;

    const defaultWidget = function(name = '', keys = []) {
      this.name = name;
      this.keys = keys;
      this.id = new Date().getTime();
    };

    this.newKey = '';
    this.newVal = '';

    this.widget = (widget && widget.name) ? widget : new defaultWidget();
  }

  itemAddPair() {
    const key = this.newKey.trim();
    const val = this.newVal.trim();
    if (key && val) {
      this.widget.keys.push({key, val}); // push key value pair todo api
      // reset pair inputs
      this.newKey = '';
      this.newVal = '';
    }
  }

  hasName() {
    return !!this.widget.name;
  }

  saveWidget() {
    if(!this.hasName()) {
      // do not save if widget has no name
      // todo form validation
      return;
    }
    // update widgets by index (from local storage) - updates one item
    // or
    // push new item
    // in both cases the list is bind to local storage - local change = storage change (make sure not to return new array - todo make module for that)
    (this.index > -1) ?
      this.widgets[this.index] = this.widget : // update by index todo api
      this.widgets.push(this.widget); // push item todo api

    this.$state.go('main');
  }
}
