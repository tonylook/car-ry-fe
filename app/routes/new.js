import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.createRecord('advert');
      },
    
      actions: {
        save(record) {
          record.save()
            .then(() => this.transitionTo('adverts'));
        },
    
        willTransition() {
          this._super(...arguments);
          const record = this.controller.get('model');
          record.rollbackAttributes();
        }
      }
});
