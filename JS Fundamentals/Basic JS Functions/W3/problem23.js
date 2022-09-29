const mostPerformant = (fns, iterations = 10000) => {
    const times = fns.map(fn => {
      const before = performance.now();
      for (let i = 0; i < iterations; i++) fn();
      return performance.now() - before;
    });
    return times.indexOf(Math.min(...times));
  };
  
  console.log(mostPerformant([
    () => {
     
      [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'].every(el => typeof el === 'number');
    },
    () => {
      /
      [1, '2', 3, 4, 5, 6, 7, 8, 9, 10].every(el => typeof el === 'number');
    }
  ])); 