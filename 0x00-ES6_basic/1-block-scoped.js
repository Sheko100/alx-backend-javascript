export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task1 = true;
    const task3 = false;
    console.log(task1, task3);
  }

  return [task, task2];
}
