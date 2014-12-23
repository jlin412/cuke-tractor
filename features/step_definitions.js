module.exports = function () {
  this.Given(/^something happened$/, function (callback) {
    callback();
  });

  i

  this.When(/^I am on a angular website$/, function (callback) {
    browser.get('http://angular.github.io/protractor/#/').then(callback);
  });

  this.When(/^invalid css path is executed$/, function (callback) {
    $('css_bad_path').click().then(callback);
  });

  this.When(/^something fails via callback$/, function (callback) {
    callback.fail(new Error('#FAIL via callback'));
  });

  this.When(/^something fails via exception$/, function (callback) {
    setTimeout(function () {
      throw new Error('#FAIL via exception');
    }, 20);
  });

  this.Then(/^something should happen$/, function (callback) {
    callback();
  });

  this.Then(/^something should not happen$/, function (callback) {
    // should not be called.
    callback();
  });
};
