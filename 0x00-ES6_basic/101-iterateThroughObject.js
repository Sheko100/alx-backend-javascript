export default function iterateThroughObject(reportWithIterator) {
  const seperator = ' | ';
  const iterator = reportWithIterator;
  let str = '';

  for (let i = 0; i < iterator.length; i += 1) {
    str += iterator[i];
    if (iterator.length - i !== 1) {
      str += seperator;
    }
  }
  return str;
}
