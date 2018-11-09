Feature: Login On Lazada.vn
As a User
I want to Login to Lazada.vn
So that I may create an order with some favourite products

    Scenario: Display Error message with out information for Username and Password
    Given The user open login page
     When Leave all field are blank and click Login button
     Then The User see the Error message below each field
     And  The input field is marked with red border
     
    Scenario: Hide corresponding message with valid value for Username and Password
    Given Leave all field are blank and click Login button
     When User input valid value for Email and Password
     Then The Error message related to each field will be hide
     
    Scenario: The User can clear content on Username and Password field
    Given User input valid value for Email and Password
    When  User click clear button displayed on each field
    Then  The corresponding content will be clear
    
    Scenario: The User can see password as plan text on password field
    Given User input valid value for Email and Password
    When  User click on show password button
    Then  The password should be displayed as plantext
    
    Scenario: The Loading should be showed when function is processing
    Given User input valid value for Email and Password
    When  User click Login button
    Then  User can see the loading icon while function is processsing
     
    Scenario: The User can see message notify that password is wrong after login with wrong password
    Given The user open login page
    When  The User try to login with right username and wrong password
    Then  User can see the popup message with wrong password notification

	Scenario: The User can see their profile information after login successfully
    Given The user open login page
    When  The User login with right credential 
    Then  User can see their profile information




