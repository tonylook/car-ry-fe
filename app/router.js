  import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('adverts');
  this.route('new');

  this.route('edit', {
    path: ':advert_id/edit'
  });

  this.route('delete', {
    path: ':advert_id/delete'
  });
});

export default Router;
