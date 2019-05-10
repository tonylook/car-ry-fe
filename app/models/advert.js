import DS from 'ember-data';

export default DS.Model.extend({
    //id: DS.attr('number'),
    title: DS.attr('string'),
    fuel: DS.attr('string'),
    price: DS.attr('number'),
    newIs: DS.attr('boolean'),
    mileage: DS.attr('number'),
    firstRegistration: DS.attr('date')
});