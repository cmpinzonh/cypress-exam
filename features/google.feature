Feature: Twitter Login
  Scenario: Successful login
    Given I am on the Twitter login page
    When I enter valid credentials
    Then I should be logged in