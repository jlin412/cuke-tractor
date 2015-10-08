module.exports = function () {

  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);
  expect = chai.expect;
  assert = chai.assert;
  chai.should();
  Object.defineProperty(protractor.promise.Promise.prototype, 'should', {
    get: Object.prototype.__lookupGetter__('should'),
    set: Object.prototype.__lookupSetter__('should')
  });
  Q = require('q');

  this.When(/^I failed at the first promise when there are two protractor function calls$/, function () {
    $('.overlay').isDisplayed();
    return $('.overlay').isPresent();
  });

  this.Then(/^I should be able to return at each failed function call$/, function () {
    var menus = $$('ul.menu li');
    return menus.each(function (item) {
      $('invalid_css').isDisplayed();
    });
  });

  this.Given(/^something happened$/, function (callback) {
    callback();
  });

  this.When(/^I am on a angular website$/, function () {
    return browser.get('http://angular.github.io/protractor/#/');
  });

  this.When(/^invalid css path is executed$/, function () {
    return $('css_bad_path').click();
  });

  this.When(/^failed inside then call$/, function () {
    return $('css_bad_path').isPresent().then(function(isElmentPresent) {
      isElmentPresent.should.equal(true);
    });
  });


  this.When(/^something fails via callback$/, function (callback) {
    callback.fail(new Error('#FAIL via callback'));
  });

  this.When(/^something fails via exception$/, function () {
    return setTimeout(function () {
      throw new Error('#FAIL via exception');
    }, 20);
  });

  this.When(/^something fails via exception in then function$/, function () {
    return $('css_bad_path').isPresent().then(function(isElmentPresent) {
      throw new Error('#FAIL via exception');
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
