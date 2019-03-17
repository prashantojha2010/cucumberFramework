Feature: Create Deal feature

Scenario: Free CRM Create a Deal scenario

Given user is  on the FreeCRM Login Page
When  the title of the page is  FreeCRM 
Then user  enters username  and password
| prashantojha2706 | Ojha@123 |

Then user clicks on submit button
Then user is on the HomePage
Then user moves to New Deal Page
Then user enters deal details 
| test deal | 1000 | 50 | 10|

Then close the browser
