const runSequentially = async <T, G>(
  array: T[],
  callback: (item: T, index: number) => Promise<G>
) => {
  const res: G[] = [];
  for (let i = 0; i < array.length; i++) {
    res.push(await callback(array[i], i));
  }
  return res;
};

const testRunSeq = async () => {
  const array: Array<string> = ['one', 'two', 'three'];

  const results = await runSequentially(array, (item, index) =>
    Promise.resolve({
      item,
      index,
    })
  );
  console.log(results);
};

testRunSeq();

const arrayMutateRemove = <T>(arr: T[], pred: (i: T) => boolean) => {
  const res: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (pred(arr[i])) {
      res.push(...arr.splice(i, 1));
    }
  }
  return res;
};

const testMutRem = () => {
  const array = [1, 2, 3, 6, 7, 9];

  const removedElements = arrayMutateRemove(array, (item) => item % 2 === 0);
  console.log(array, removedElements);
};
testMutRem();
