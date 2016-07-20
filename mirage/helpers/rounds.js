import {faker} from 'ember-cli-mirage';

export default function(){
  return faker.random.arrayElement(["Turkey","Germany","Singapore","France","Bahrain","Great Britain","Pacific","Japan","Malaysia","Spain","Pescara","Russia","Netherlands","Portugal","Indianapolis 500","Canada","Austria","China","Monaco","South Africa","Australia","United States","Argentina","Luxembourg","Italy","Sweden","Korea","Brazil","India","Morocco","Switzerland","Hungary","Belgium","San Marino","Europe","Las Vegas","Mexico","Usa East","Abu Dhabi","Usa West"]);
}
