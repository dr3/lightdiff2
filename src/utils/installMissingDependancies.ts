import fs from 'fs-extra';
import path from 'path';
import childProcess from 'child_process';
import chalk from 'chalk';

const getPathFromBase = (pathString: string) =>
  path.join(__dirname, `../../${pathString}`);

const installMissingDependencies = () => {
  const packageJson = fs.readJSONSync(getPathFromBase(`package.json`));

  const missingDeps = Object.entries(
    packageJson.postInstallDependencies
  ).filter(
    ([dep]) => !fs.pathExistsSync(getPathFromBase(`node_modules/${dep}/`))
  );

  if (missingDeps.length) {
    console.log(
      chalk.red(
        `Oops! You dont have ${missingDeps
          .map(([dep]) => dep)
          .join(' & ')} installed!`
      )
    );

    missingDeps.map(([dep, version]) => {
      console.log(chalk.green(`Installing ${dep}@${version}`));
      childProcess.execSync(`npm install ${dep}@${version} --no-save`);
    });
  }
};

export default installMissingDependencies;
