export default function() {

  this.urlPrefix = 'http://localhost:8080';
  this.namespace = '/api';    

    this.get('/adverts');
    this.post('/adverts');
    this.get('/adverts/:id');
    this.patch('/adverts/:id');
    this.del('/adverts/:id');

}
