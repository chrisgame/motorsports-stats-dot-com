export default function(){
  const hours = Math.floor(Math.random() * 23) + 1;
  const minutes = Math.floor(Math.random() * 59) + 1;
  const seconds = Math.floor(Math.random() * 59) + 1;
  return hours + ':' + minutes + ':' + seconds;
}
