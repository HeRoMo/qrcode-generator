module.exports = {
  roots: [
    '<rootDir>/test',
  ],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@bin/(.+)': '<rootDir>/bin/$1',
    '^@lib/(.+)': '<rootDir>/lib/$1',
    '^@src/(.+)': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/test/env.setup.ts'],
};
