/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  } else {
    let n = 1
    let num = []
    for (let i = 1; i <= n; i++) {
      let a = x / Math.pow(10, i)
      if (a < 1) {
        let l = i - 1
        i = n + 1
        let sub = 0
        let k = 0
        for (let j = l; j >= 0; j--) {
          num[k] = Math.floor((x - sub) / Math.pow(10, j))
          sub = num[k] * Math.pow(10, j) + sub
          k++
        }
        let y = 0
        for (let j = 0; j < l + 1; j++) {
          y = y + num[j] * Math.pow(10, j)
        }
        if (x === y) {
          return true
        } else {
          return false
        }
      } else {
        n++
      }
    }
  }
}

isPalindrome()
