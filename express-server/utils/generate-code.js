function generateCode() {
  const min = 100000;
  const max = 999999;
  const code = Math.floor(Math.random() * (max - min + 1)) + min;
  return code.toString(); // Convert the number to a string
}

module.exports = {
  generateCode,
};
