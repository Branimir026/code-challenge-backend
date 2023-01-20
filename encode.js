const encoder = require('./encoder')

module.exports = function encode (req, res) {
  const { string } = req.body

	let result = encoder(string);

  return res.send(result)
}
