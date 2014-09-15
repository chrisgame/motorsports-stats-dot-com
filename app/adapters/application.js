import DS from 'ember-data';

export default DS.ActiveModelAdapter.reopen({
  host: 'http://localhost:3000',
});
