module.exports = function towelSort (matrix) {
  if (matrix == undefined) {
    return []
  }

  matrix.forEach(function(value, index) {
    if (index % 2 !== 0 && index != 0) {
      return value.reverse()
    }
  })
    
  return matrix.flat(1)
}
