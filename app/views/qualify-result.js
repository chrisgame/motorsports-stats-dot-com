export default Ember.View.extend({
  templateName: 'qualify_result',

  didInsertElement: function(){
    this._super();
    
    if(this.$('td.timeOrRetirement').text().length == 0){
      this.$('th.timeOrRetirement').remove(); 
      this.$('td.timeOrRetirement').remove(); 
    }

    if(this.$('td.q1').text().length == 0){
      this.$('th.q1').remove(); 
      this.$('td.q1').remove(); 
    }

    if(this.$('td.q2').text().length == 0){
      this.$('th.q2').remove(); 
      this.$('td.q2').remove(); 
    }
    
    if(this.$('td.q3').text().length == 0){
      this.$('th.q3').remove(); 
      this.$('td.q3').remove(); 
    }

    if(this.$('td.laps').text().length == 0){
      this.$('th.laps').remove(); 
      this.$('td.laps').remove(); 
    }
  }
});
