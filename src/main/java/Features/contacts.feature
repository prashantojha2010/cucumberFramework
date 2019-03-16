Feature: Free CRM Create Contact feature

Scenario Outline: Free CRM Create a Contact scenario

Given user is  on the FreeCRM Login Page
When  the title of the page is  FreeCRM 
Then user  enters "<username>"  and "<password>"
Then user clicks on submit button
Then user is on the HomePage
Then user moves to New Contact Page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then close the browser

Examples:

  | username         | password | firstname | lastname | position |
  | prashantojha2706 | Ojha@123 | Jack      |  Timas   | CEO      |
  | prashantojha2706 | Ojha@123 | Jimmy     |  Carton  | CFO      |
  | prashantojha2706 | Ojha@123 | Roger     |  Berton  | CFO      |
  