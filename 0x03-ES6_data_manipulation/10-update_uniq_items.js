export default function updateUniqueItems(map) {
  const mapCpy = map;

  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }

  for (const [key, value] of mapCpy) {
    if (value === 1) {
      mapCpy.set(key, 100);
    }
  }

  return mapCpy;
}
