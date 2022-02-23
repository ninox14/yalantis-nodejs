import * as readline from 'readline';
import fetch from 'node-fetch';
import os from 'os';
import si from 'systeminformation';
import { setInterval } from 'timers';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const printVars = () => {
  si.cpuTemperature().then((r) => console.log('cpu temp ', r.cores));

  si.graphics().then((r) => {
    console.log('gpu vendor ', r.controllers[0].vendor);
    console.log('gpu model ', r.controllers[0].model);
  });
  si.mem().then((r) => {
    console.log('mem total ', r.total / (1024 * 1024 * 1024));
    console.log('mem free ', r.free / (1024 * 1024 * 1024));
    console.log('mem used ', r.used / (1024 * 1024 * 1024));
  });
  si.battery().then((r) => {
    if (r.hasBattery) {
      console.log('battery precent ', r.percent);
      console.log('battery charging ', r.isCharging);
      console.log('battery timeRemaining ', r.timeRemaining);
    }
  });
  console.log(os.platform());
  console.log(os.arch());
  console.log(os.cpus()[0].model);
  console.log(os.userInfo().username);
};

try {
  rl.question('tell me miliseconds', (msstr) => {
    const ms = +msstr;
    if (isNaN(ms)) throw new Error('not a number');
    const int = setInterval(printVars, ms);

    process.on('SIGINT', () => {
      clearInterval(int);
      process.exit();
    });
  });
} catch (err) {
  console.error(err);
}
