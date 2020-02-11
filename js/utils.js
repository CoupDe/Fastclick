function getTimestamp() {
  let d = new Date();
  return d.getTime();
}

function randomDivId() {
  let d;
  let n;
  do {
    d = Math.floor(Math.random() * 7) + 1;
    n = Math.floor(Math.random() * 7) + 1;
  } while ($(`#slot-${d}${n}`).length==0);
  
    return `#slot-${d}${n}`;
    

}