export default function cleanSet(set, startString) {
  let str = '';
  const strArr = [];

  if (startString === '') {
    return str;
  }

  set.forEach((val) => {
    if (val.startsWith(startString)) {
      strArr.push(val.slice(startString.length));
    }
  });
  str = strArr.join('-');
  return str;
}
