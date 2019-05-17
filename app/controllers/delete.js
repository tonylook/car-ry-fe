import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        confirm() {
          this.get("model").destroyRecord()
            .then(() => this.transitionToRoute("adverts"));
        }
      }
});
