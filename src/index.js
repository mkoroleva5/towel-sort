module.exports = function towelSort (matrix) {
  let newMatrix = matrix.reduce((acc, value, index) => {
    return acc.concat(!(index%2===0) ? value.reverse() : value);
    }, []);
  return newMatrix;
};