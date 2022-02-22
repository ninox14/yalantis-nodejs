import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import fetch from 'node-fetch';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const folderSuffix = '_pages';

try {
  rl.question('enter file path', (filePath) => {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as string[];
    const folderName = `${path.basename(filePath, '.json')}${folderSuffix}`;
    const dirPath = path.join(path.dirname(__filename), folderName);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    for (const link of data) {
      const url = new URL(link);
      (async () => {
        const resp = await fetch(url.href);
        const page = await resp.text();
        const fp = path.join(dirPath, `${url.origin.split('//')[1]}.html`);
        fs.writeFile(fp, page, (err) => {
          console.error('done');
        });
      })();
    }
  });
} catch (err) {
  console.error(err);
}
