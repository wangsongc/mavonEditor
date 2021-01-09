module.exports = {
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!auto-textarea|@vue|src)"],
  testMatch: [
    "**/tests/unit/*.spec.js"
  ],
  verbose: true,
  moduleFileExtensions: ['js', 'vue', 'md', 'html'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.vue$": "<rootDir>/node_modules/vue-jest",
    '.*\\.(yml|html|md)$': 'jest-raw-loader'
  },
  setupFiles: ['<rootDir>/tests/unit/setup.js'], // 类似 webpack.entry
  coverageDirectory: '<rootDir>/tests/unit/coverage', // 类似 webpack.output
  collectCoverageFrom: [ // 类似 webpack 的 rule.include
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/dev/**',
    '!**/node_modules/**'
  ]
}
