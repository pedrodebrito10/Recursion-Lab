let fibCache = [];

function fibonacci(n) {

  if (n <= 1) return n;

  if (fibCache[n] !== undefined) {
    return fibCache[n];
  }

  fibCache[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return fibCache[n];
}
