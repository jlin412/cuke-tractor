Feature: Some feature

  Scenario: failed by protactor invalid path
    Given I am on a angular website
    When invalid css path is executed
    Then something should not happen

  Scenario: fail via callback
    Given something happened
    When something fails via callback
    Then something should not happen

  Scenario: fail via exception
    Given something happened
    When something fails via exception
    Then something should not happen

  Scenario: B
    Given something happened
    When something happens
    Then something should happen

  Scenario: failed by protractor inside then call via callback
    Given I am on a angular website
    When something fails via callback in then function
    Then something should not happen

  Scenario: failed by protractor inside then call via exception
    Given I am on a angular website
    When something fails via exception in then function
    Then something should not happen

  Scenario: failed by protractor inside then call
    Given I am on a angular website
    When failed inside then call
    Then something should not happen


