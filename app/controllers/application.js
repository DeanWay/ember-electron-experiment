import Ember from 'ember';

const {computed} = Ember;

export default Ember.Controller.extend({
  names: ['Stefan', 'Miguel', 'Pluto'],
  selectedName: computed('names', function(){
      return  this.get('names')[0];
  }),
  actions: {
    foo(name) {
      this.set('selectedName', name)
      return name
    }
  }
});
