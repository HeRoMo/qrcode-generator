import * as path from 'path';
import * as fs from 'fs';

/**
 * prepareLayerModules をテスト用にフェイクする
 * @param distDir
 */
export function fakeLayerModules(distDirName = 'dist'): string {
  const distDir = path.join(__dirname, '..', distDirName);
  fs.rmdirSync(distDir, { recursive: true });
  const moduleDir = path.join(distDir, 'nodejs', 'node_modules');
  fs.mkdirSync(moduleDir, { recursive: true });
  return moduleDir;
}
