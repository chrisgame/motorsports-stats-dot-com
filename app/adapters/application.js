import DS from 'ember-data';

export default DS.ActiveModelAdapter.reopen({
  host: 'http://localhost:4200',
});
