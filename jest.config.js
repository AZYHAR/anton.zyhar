module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!src/App.jsx', // exclude entry point file
    '!src/index.js', // exclude entry point file
    '!**/__tests__/**', // exclude test files
    '!**/node_modules/**', // exclude node_modules
  ],
  maxWorkers: '50%', // enable parallel test execution 50% of CPU
  cache: true, // cache the results of tests to avoid re-running tests that haven't changed since the last run
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 90,
    },
  },
  // Mock css files imports to prevent throwing error
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
  },
}
