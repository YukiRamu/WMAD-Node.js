const message = () => {
  console.log("importing from module.js");
  return `
  <h2>Hello I am imported from module.js</h2>
  `
};

module.exports = message;