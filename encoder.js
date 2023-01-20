module.exports = function encoder (string) {
	let output = '';
  let groupedLetters = string.match(/([a-zA-Z])\1*/g) || [];
  groupedLetters.map(item => {
    output += item[0] + item.length;
  })
  return output;
}