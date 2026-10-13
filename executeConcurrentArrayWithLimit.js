async function runWithLimit(tasks, limit) {
  const res = [];

  if (limit <= 0) {
    throw new Error("Limit must be greater than 0");
  }

  if (limit >= tasks.length) {
    return Promise.allSettled(tasks);
  }

  let i = 0;

  while (i < tasks.length) {
    const batch = tasks.slice(i, i + limit);

    const ans = await Promise.allSettled(batch);
    res.push(...ans);

    i += limit;
  }

  return res;
}

const promises = [
  Promise.resolve("Task 1"),
  Promise.resolve("Task 2"),
  Promise.resolve("Task 3"),
  Promise.resolve("Task 4"),
];

runWithLimit(promises, 2).then((res) => {
  console.log(res);
});
