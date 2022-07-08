const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
  };
  console.log(difference([19, 12, 34], [11, 12, 45]));
  console.log(difference([11, 12, 45],[11, 21, 34]));const isEven = num => num % 2 === 0;
  console.log(isEven(3));
  console.log(isEven(32));
  console.log(isEven(1));
  console.log(isEven(0));