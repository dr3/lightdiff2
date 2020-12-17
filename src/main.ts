#!/usr/bin/env node
import program from 'commander';
import fs from 'fs-extra';
import path from 'path';
import run from './scripts/run';

const main = () => {
  program
    .version(fs.readJsonSync(path.join(__dirname, '../package.json')).version)
    .description('lightdiff - a lighthouse comparison tool')
    .usage('lightdiff <cmd> [options]');

  program
    .command('lightdiff')
    .description('run stuff')
    .option('-a, --apple', 'an example option to use', false)
    .action(run);

  program.parse(process.argv);
};

export default main;
