module.exports = {
  setupFiles: ['<rootDir>/__test__/setupTests.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/','<rootDir>/.png'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/__test__/CSSconfig.js',
    'public-ip': '<rootDir>/__test__/PublicIPconfig.js',
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/empty.js",
  },
  rootDir: './',
}