const anagram = (s1: string, s2: string) => {
  const [s1c, s2c] = [
    s1
      .toLowerCase()
      .split('')
      .filter((i) => /^[\w]$/gi.test(i)),
    s2
      .toLowerCase()
      .split('')
      .filter((i) => /^[\w]$/gi.test(i)),
  ];
  if (s1c.length !== s2c.length) return false;

  while (s1c.length) {
    const l = s1c.pop();
    if (!l) break;
    const i = s2c.indexOf(l);
    if (i === -1) return false;
    s2c.splice(i, 1);
  }
  return true;
};

console.log(anagram('abcd123', 'a123dcb'));
console.log(anagram('New York Times', 'monkeys write'));

const clone = (obj: any) => {
  // return structuredClone(obj);
  return JSON.parse(JSON.stringify(obj));
};

const memo = (fn: Function) => {
  const o: Record<string, unknown> = {};

  return (...args: unknown[]) => {
    const key = JSON.stringify(args);
    if (!(key in o)) {
      o[key] = fn.apply(null, args);
    }
    return o[key];
  };
};

const add = (a: number, b: number) => a + b;
const cachedAdd = memo(add);
console.log(cachedAdd(2, 2)); // 4 calculated
console.log(cachedAdd(5, 8)); // 13 calculated
console.log(cachedAdd(2, 2)); // 4 from cache

const serialSearch = (arr: Array<string | number>, v: string | number) => {
  const counts = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== v) {
      continue;
    }
    if (arr[i] === v) {
      count++;
    }
    if (arr[i + 1] !== v) {
      counts.push(count);
      count = 0;
    }
  }
  console.log(counts);
  return Math.max(...counts);
};

console.log(
  serialSearch(
    [1, 2, 2, 2, 2, 3, 3, 2, 2, 2, 4, 4, 5, 2, 2, 2, 2, 2, 2, 2, 2],
    2
  )
);
