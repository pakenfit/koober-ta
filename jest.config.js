module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@level1/(.*)': '<rootDir>/src/level1/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
