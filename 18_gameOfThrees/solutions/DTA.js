/* Created by David Adams December 22 2015 */
function gameOfThrees(number) {
  if (number === 1) {
    console.log(1)
    return
  }
  else if (number % 3 === 0) {
    console.log(number + ' 0')
    gameOfThrees(number / 3)
  }
  else if ((number - 1) % 3 === 0) {
    console.log(number + ' -1')
    gameOfThrees((number - 1) / 3)
  } else {
    console.log(number + ' 1')
    gameOfThrees((number + 1) / 3)
  }
}

gameOfThrees(100)
console.log();
gameOfThrees(31337357)
