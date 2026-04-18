if (!Promise.allSettled) {
  Promise.allSettled = function (promises) {
    return new Promise((resolve) => {
      const results = [];
      let settledCount = 0;

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = { status: "fulfilled", value };
          })
          .catch((reason) => {
            results[index] = { status: "rejected", reason };
          })
          .finally(() => {
            settledCount++;
            if (settledCount === promises.length) {
              resolve(results);
            }
          });
      });

      // handle empty input array
      if (promises.length === 0) {
        resolve([]);
      }
    });
  };
}
