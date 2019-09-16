const esModules = ['jest-test'].join('|');

module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': `${__dirname}/mock-module.js`
  },
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`]
};
