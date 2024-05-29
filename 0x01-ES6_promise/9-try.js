export default function guardrail(mathFunction) {
  const queue = [];
  let res = 0;

  try {
    res = mathFunction();
    queue.push(res);
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
