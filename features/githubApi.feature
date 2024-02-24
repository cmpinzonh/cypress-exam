@local
Feature: Github API Example Test @local
  Scenario: Successful login
    Given I am a Github user
    When I call a github API
    Then I should receive a json response