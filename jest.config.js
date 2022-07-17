module.exports = {
  setupFilesAfterEnv: [ '<rootDir>/jest.setup.js' ],
  testEnvironment: 'jsdom',
  transform: {
    '\\.js$':  [
      'esbuild-jest', {
        loaders: {
          '.test.js': 'jsx',
          '.js': 'jsx',
        },
      },
    ],
  },
}
