{
  const resource = {
    a: 'a',
    b: 1
  };

  let {a, b}: { a: string, b: number } = resource;

  console.log(a);
  console.log(b);
}
