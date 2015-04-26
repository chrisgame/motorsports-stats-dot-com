import DS from 'ember-data';

export default DS.ActiveModelAdapter.reopen({
  host: 'https://prod-motorsports-stats-api.herokuapp.com/',
  //host: 'http://localhost:4200',
});
