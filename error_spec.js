describe('finding an element that does not exist', function() {
  it('should throw an error', function() {
    browser.get('http://angular.github.io/protractor/#/');
    $('.css_path_invalid').isDisplayed();
    $('.css_path_invalid').isPresent();
  });

  it('should throw an error second time', function() {
    browser.get('http://angular.github.io/protractor/#/');
    $('.css_path_invalid').isDisplayed();
    $('.css_path_invalid').isPresent();
  });

  it('should throw an error third time', function() {
    browser.get('http://angular.github.io/protractor/#/');
    $('.css_path_invalid').isPresent();
    $('.css_path_invalid').isDisplayed();
  });

});