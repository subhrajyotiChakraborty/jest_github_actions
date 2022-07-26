const config = {
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "mjs"],
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.js", "!**/node_modules/**"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html", "json"],
};

module.exports = config;
