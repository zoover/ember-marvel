import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  type: DS.attr('string'),
  creators: DS.attr(),
});
