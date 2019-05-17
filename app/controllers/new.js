import Controller from '@ember/controller';

export default Controller.extend({
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    newModel: {},
    actions: {
        save(){
            let model = this.store.createRecord('advert',this.get("newModel"))
            this.set("newModel", {})
            model.save().then(()=>{
                this.transitionToRoute("adverts")
            })
        }
    }
});
