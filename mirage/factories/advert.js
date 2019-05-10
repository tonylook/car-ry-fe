import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
        title() {
          return faker.commerce.product();
        },
        fuel() {
          return faker.commerce.color();
        },
        price() {
          return faker.random.number();
        },
        isNew() {
          return faker.random.boolean();
        },
        mileage() {
          return faker.random.number();
        },
        firstRegistration() {
            return faker.date.past(1);
          }
});
