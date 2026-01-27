{
  let name = 'yujin';

  const sum = (a: number, b: number): number => {
    if (a >= 5) {
      a = 2;
    }
    return a + b;
  };

  console.log(sum(4, 4));
}
