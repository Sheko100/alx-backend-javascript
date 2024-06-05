export const weakMap = new WeakMap();

export function queryAPI(query) {
  let count = 0;

  if (weakMap.has(query)) {
    count = weakMap.get(query);
  }

  if (count + 1 >= 5) {
    throw Error('Endpoint load is high');
  }

  weakMap.set(query, count + 1);
}
