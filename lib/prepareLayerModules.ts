import * as childProcess from 'child_process';
import * as path from 'path';

/**
 * Layer用の node_module ディレクトリを準備する
 * @param distDir
 */
export function prepareLayerModules(distDirName = 'dist'): string {
  const distDir = path.join(__dirname, '..', distDirName);
  const moduleDir = path.join(distDir, 'nodejs', 'node_modules');
  childProcess.execSync(`yarn install --production --modules-folder ${moduleDir}`);
  return moduleDir;
}
