Feature: Create Deal feature

Scenario: Free CRM Create a Deal scenario

Given user is  on the FreeCRM Login Page
When  the title of the page is  FreeCRM 
Then user  enters username  and password
| username         | password |
| prashantojha2706 | Ojha@123 |

Then user clicks on submit button
Then user is on the HomePage
Then user moves to New Deal Page
Then user enters deal details 
|  title     |amount| probability|commission|
| test deal1 | 1000 | 50 | 10|
| test deal2 | 2000 | 40 | 20|
| test deal3 | 3000 | 30 | 30|

Then close the browser
