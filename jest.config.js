module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@level1/(.*)': '<rootDir>/src/level1/$1',
    '@level2/(.*)': '<rootDir>/src/level2/$1',
    '@level3/(.*)': '<rootDir>/src/level3/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
