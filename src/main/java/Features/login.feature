
Feature: Free  CRM login feature

#Without using Example keyword
#Scenario: Free  CRM login feature

#Given user is  on the FreeCRM Login Page
#When  the title of the page is  FreeCRM 
#Then user  enters  "prashantojha2706"  and "Ojha@123"
#Then user clicks on submit button
#Then user is on the HomePage



#Without using Example keyword #
Scenario Outline: Free  CRM login feature

Given user is  on the FreeCRM Login Page
When  the title of the page is  FreeCRM 
Then user  enters "<username>"  and "<password>"
Then user clicks on submit button
Then user is on the HomePage
Then close the browser

Examples:

| username         | password |
| prashantojha2706 | Ojha@123 |
| tom              | test@123| 
