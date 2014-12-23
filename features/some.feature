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
