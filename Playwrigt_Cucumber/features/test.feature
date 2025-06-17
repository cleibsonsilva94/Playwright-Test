Feature: Post

  Scenario: SignIn
    Given I am on Swag Labs app's Login page
    When I enter email and password
    And I click on Login button 
    Then The page should display "Products"
