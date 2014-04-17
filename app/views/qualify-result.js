export default Ember.View.extend({
  templateName: 'qualify_result',

  removeColumnWhenNoDataIn: function(selector){
      if (this.$('td.'+selector).text().length === 0){ 
        this.$('th.'+selector).remove(); 
        this.$('td.'+selector).remove(); 
      }
  },

  didInsertElement: function(){
    this._super();
    
    this.removeColumnWhenNoDataIn('timeOrRetirement');
    this.removeColumnWhenNoDataIn('q1');
    this.removeColumnWhenNoDataIn('q2');
    this.removeColumnWhenNoDataIn('q3');
    this.removeColumnWhenNoDataIn('laps');
  }
});
