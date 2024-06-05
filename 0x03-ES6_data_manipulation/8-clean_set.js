export default function cleanSet(set = new Set(), startString = '') {
  let str = '';
  const strArr = [];

  if (!(set instanceof Set) || (startString.length < 1 || set.size < 1)) {
    return str;
  }

  set.forEach((val) => {
    if (val && val.startsWith(startString)) {
      strArr.push(val.slice(startString.length));
    }
  });
  str = strArr.join('-');

  return str;
}
