import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
/**
 * svg图标
 * 自动生成 icons.js 文件
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svgDir = path.resolve(__dirname, '../svg');
const outputFilePath = path.resolve(__dirname, './icons.js');
export const generateIcons = () => {
  const files = fs.readdirSync(svgDir);
  const icons = {};

  files.forEach(file => {
    if (path.extname(file) === '.svg') {
      const name = path.basename(file, '.svg');
      const content = fs.readFileSync(path.join(svgDir, file), 'utf-8');
      icons[name] = content;
    }
  });

  const output = `export const icons = ${JSON.stringify(icons, null, 2)};`;
  fs.writeFileSync(outputFilePath, output, 'utf-8');
  console.log('Icons generated successfully.');
};
