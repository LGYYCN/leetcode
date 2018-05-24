/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let n = 0
  for (let i = 0; i < J.length; i++) {
    for (let k = 0; k < S.length; k++) {
      if (J[i]===S[k]) {
        n++
      }
    }
  }
  console.log(n)

};

let J = "aA"
let S = "aAAbbbb"
numJewelsInStones(J, S)