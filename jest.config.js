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
  setupFiles: ['<rootDir>/tests/unit/setup.js'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/dev/**',
    '!**/node_modules/**',
    // 不确定下面这些文件是否有用，dist打包没用到
    '!src/lib/core/markdown.js',
    '!src/lib/core/onecolumn-event.js',
    '!src/lib/core/to-markdown.js',
    '!src/lib/core/highlight.js'
  ],
  snapshotSerializers: [
    "jest-serializer-vue"
  ]
}
