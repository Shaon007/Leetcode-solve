function cancellable(fn, args, t) {
  const timer = setTimeout(() => fn(...args), t);

  const cancelFn = () => clearTimeout(timer);

  return cancelFn;
}
console.log(cancellable((x) => x ** 2), [2],100,50);