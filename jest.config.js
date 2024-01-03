module.exports = {
	collectCoverage: true, // enables collecting coverage
	collectCoverageFrom: ['src/**/*.{js,jsx}'], // specifies files to collect coverage from (js and jsx from src folder)
	coverageDirectory: 'coverage', // specifies folder jest will put coverage files
	testEnvironment: 'jsdom', // The test environment that will be used for testing note
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
}