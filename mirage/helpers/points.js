import {faker} from 'ember-cli-mirage';

export default function(){
  return faker.random.arrayElement(["4.5","20.0","9.0","3.5","18.0","16.0","25.0","1.0","36.0","8.0","6.0","3.0","0.5","50.0","4.0","5.0","3.3","12.0","1.3","24.0","6.5","2.5","1.5","15.0","2.0","7.0","8.5","30.0","10.0","0.0"]);
}