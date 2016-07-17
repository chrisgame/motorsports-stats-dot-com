export default function(){
  const wholes = Math.floor(Math.random() * 99) + 0;
  const fractions = Math.floor(Math.random() * 999) + 0;
  return wholes + '.' + fractions;
}
