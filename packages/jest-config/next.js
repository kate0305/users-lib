/**
 * @typedef {import('jest').Config} JestConfig
 */

const baseJest = require('./base');

/** @type JestConfig */
const config = {
  ...baseJest,
  moduleFileExtensions: [
    ...(baseJest.moduleFileExtensions ?? []),
    'jsx',
    'tsx',
  ],
};

/**
 * @type {(configOverwrite?: JestConfig) => Promise<JestConfig>}
 *
 * @description Callable function.
 *
 * Can receive a `JestConfig` as value to overwrite the default values.
 *
 */
module.exports = (configOverwrite) =>
  createJestConfig({ ...config, ...configOverwrite });
