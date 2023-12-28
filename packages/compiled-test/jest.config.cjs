/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};

module.exports = config;
