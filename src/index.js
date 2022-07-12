module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  } else {  
    return matrix.reduce((acc, value, index) => {
    return acc.concat(!(index%2===0) ? value.reverse() : value);
    }, []);
  }
}