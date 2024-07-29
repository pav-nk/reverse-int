module.exports = function reverse (n) {
  const result = +String(Math.abs(n)).split("").reverse().join("");
  return result;
}
