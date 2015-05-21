var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
expect = chai.expect;

module.exports = function () {
  this.Given(/^something happened$/, function (callback) {
    callback();
  });

  this.When(/^I am on a angular website$/, function (callback) {
    browser.get('http://angular.github.io/protractor/#/').then(callback);
  });

  this.When(/^invalid css path is executed$/, function (callback) {
    $('css_bad_path').click().then(callback);
  });

  this.When(/^failed inside then call$/, function (callback) {
    $('css_bad_path').isPresent().then(function(isElmentPresent) {
      expect(isElmentPresent).to.equal(true);
      callback();
    });
  });


  this.When(/^something fails via callback$/, function (callback) {
    callback.fail(new Error('#FAIL via callback'));
  });

  this.When(/^something fails via exception$/, function (callback) {
    setTimeout(function () {
      throw new Error('#FAIL via exception');
    }, 20).then(callback);
  });

  this.When(/^something fails via exception in then function$/, function (callback) {
    $('css_bad_path').isPresent().then(function(isElmentPresent) {
      throw new Error('#FAIL via exception');
      callback();
    });
  });

  this.When(/^something fails via callback in then function$/, function (callback) {
    $('css_bad_path').isPresent().then(function(isElmentPresent) {
      callback.fail(new Error('#FAIL via callback'));
    });
  });


  this.Then(/^something should happen$/, function (callback) {
    callback();
  });

  this.Then(/^something should not happen$/, function (callback) {
    // should not be called.
    callback();
  });
};
