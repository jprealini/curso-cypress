Feature: UI Login

Scenario: Login error to the site using the login form
    Given I visit the website
    When I login with "admin" and "asdf"
    Then I should not log in
    
Scenario: Login succesfully to the site using the login form
    Given I visit the website
    When I login with "admin" and "9Ijn8Uhb"
    Then I should log in

