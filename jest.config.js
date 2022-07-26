const config = {
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "mjs"],
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.js", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html", "json"],
};

module.exports = config;
