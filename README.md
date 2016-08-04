# Ionic 2 Unit Test Project

This project was made in order to explore and try making unit/e2e tests for Ionic 2.  There is hardly any documentation or anything out there (that I'm aware of) for writing tests for Ionic 2, so I decided to piggy back off of [lathonez](https://github.com/lathonez) and write up something that'd (hopefully) help out the community with this.

## Getting Started

1. Clone the repo: `git clone https://github.com/dually8/ionic2-unit-tests.git`
2. Run `npm install` in the project folder to install dependencies.
3. Run `gulp unit-test` or `npm test` to run through the tests using karma as the test runner.
4. Output should look similar to this.
```
START:
04 08 2016 12:12:30.450:INFO [framework.browserify]: bundle built
04 08 2016 12:12:30.470:INFO [karma]: Karma v1.1.2 server started at http://localhost:9876/
04 08 2016 12:12:30.470:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
04 08 2016 12:12:30.476:INFO [launcher]: Starting browser PhantomJS
04 08 2016 12:12:30.954:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket /#j-8zkds0rvVBLea3AAAA with id 11801488
  Contact Page
    ✔ should be defined
  Contact Provider
    ✔ should have something
    ✔ should have getContacts function
    ✔ should return Mr. F

Finished in 0.03 secs / 0.028 secs

SUMMARY:
✔ 4 tests completed
-----------------------------|----------|----------|----------|----------|----------------|
File                         |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------------------------|----------|----------|----------|----------|----------------|
 pages/contact/              |      100 |      100 |      100 |      100 |                |
  contact.ts                 |      100 |      100 |      100 |      100 |                |
 providers/contact-provider/ |       96 |    96.77 |      100 |    92.31 |                |
  contact-provider.ts        |       96 |    96.77 |      100 |    92.31 |             40 |
-----------------------------|----------|----------|----------|----------|----------------|
All files                    |    97.96 |    98.33 |      100 |       96 |                |
-----------------------------|----------|----------|----------|----------|----------------|
```

## Dependencies

Here, I'll list the dependencies and what they're used for.  Special thanks to lathonez for the work he's done on this already. (See [here](https://github.com/lathonez/clicker))

- browserify: peer dependency of karma-browserify
- browserify-istanbul: coverage transformer for karma-browserify
- isparta: ES6 unit test coverage reporter
- jasmine-core: jasmine coverage reporter
- karma: unit test runner
- karma-browserify: transpile and bundle typescript in Karma
- karma-chrome-launcher: allows using chrome with Karma
- karma-coverage: unit test coverage reporter
- karma-jasmine: jasmine framework for Karma
- karma-mocha-reporter: mocha progress reporter for Karma
- karma-phantomjs-launcher: allows using phantom with Karma
- phantomjs-prebuilt: phantom headless browser
- tsify: typescript plugin for karma-browserify

## Todo
- [x] Add unit tests
- [ ] Add e2e tests
- [ ] Add 'How to Write Unit Tests' doc.
  - [ ] For pages
  - [ ] For providers
  - [ ] For pipes?
- [ ] Make README better
