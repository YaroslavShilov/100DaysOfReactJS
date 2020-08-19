{
  const f = (a: number, b: number): number => a + b;

  type FType = (a: number, b: number) => number;

  const sum: FType = f;
}
