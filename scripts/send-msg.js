const chat_id = process.env.CHAT_ID;
const token = process.env.TOKEN;
const url = '';

import fs from 'fs';
const configPath = "src-tauri/tauri.conf.json";
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
const changelog = fs.readFileSync('CHANGELOG', 'utf8');
let message = `*${config.package.productName} v${config.package.version}* New Release!\n
${changelog}\n
*Please update to the latest version*\n
[Download Here](${url})`;

console.log(message);
message = encodeURIComponent(message)
const bot_respose = await fetch(``)
console.log(bot_respose)