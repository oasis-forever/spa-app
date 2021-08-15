const str = 'Keep On Asking, andit Will Be Given You.';
const upperStr = str.replace(/[a-z]+/g, (lower) => {
  return lower.toUpperCase();
});
console.log(upperStr);
