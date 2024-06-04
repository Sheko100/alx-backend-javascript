export default function hasValuesFromArray(set, array) {
  let allExist = true;

  array.every((val) => {
    if (!set.has(val)) {
      allExist = false;
    }
    return allExist;
  });

  return allExist;
}
