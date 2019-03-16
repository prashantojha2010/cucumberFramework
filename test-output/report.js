$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Prashant Ojha/eclipse-workspace/CucumberDemo1/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contact feature",
  "description": "",
  "id": "free-crm-create-contact-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create a Contact scenario",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm-create-a-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is  on the FreeCRM Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the title of the page is  FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user  enters \"\u003cusername\u003e\"  and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on the HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to New Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm-create-a-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "free-crm-create-contact-feature;free-crm-create-a-contact-scenario;;1"
    },
    {
      "cells": [
        "prashantojha2706",
        "Ojha@123",
        "Jack",
        "Timas",
        "CEO"
      ],
      "line": 17,
      "id": "free-crm-create-contact-feature;free-crm-create-a-contact-scenario;;2"
    },
    {
      "cells": [
        "prashantojha2706",
        "Ojha@123",
        "Jimmy",
        "Carton",
        "CFO"
      ],
      "line": 18,
      "id": "free-crm-create-contact-feature;free-crm-create-a-contact-scenario;;3"
    },
    {
      "cells": [
        "prashantojha2706",
        "Ojha@123",
        "Roger",
        "Berton",
        "CFO"
      ],
      "line": 19,
      "id": "free-crm-create-contact-feature;free-crm-create-a-contact-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Create a Contact scenario",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm-create-a-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is  on the FreeCRM Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the title of the page is  FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user  enters \"prashantojha2706\"  and \"Ojha@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on the HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to New Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Jack\" and \"Timas\" and \"CEO\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefination.user_is_on_the_FreeCRM_Login_Page()"
});
formatter.result({
  "duration": 37240188502,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.the_title_of_the_page_is_FreeCRM()"
});
formatter.result({
  "duration": 30491648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prashantojha2706",
      "offset": 14
    },
    {
      "val": "Ojha@123",
      "offset": 38
    }
  ],
  "location": "loginStepdefination.user_clicks_on_username_and_password(String,String)"
});
formatter.result({
  "duration": 293603923,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 4053775161,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.user_is_on_the_HomePage()"
});
formatter.result({
  "duration": 8548048,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.user_moves_to_New_Contact_Page()"
});
formatter.result({
  "duration": 1914619590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jack",
      "offset": 29
    },
    {
      "val": "Timas",
      "offset": 40
    },
    {
      "val": "CEO",
      "offset": 52
    }
  ],
  "location": "loginStepdefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 2081211845,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.close_the_browser()"
});
formatter.result({
  "duration": 661101737,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Create a Contact scenario",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm-create-a-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is  on the FreeCRM Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the title of the page is  FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user  enters \"prashantojha2706\"  and \"Ojha@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on the HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to New Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Jimmy\" and \"Carton\" and \"CFO\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefination.user_is_on_the_FreeCRM_Login_Page()"
});
formatter.result({
  "duration": 39994778388,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.the_title_of_the_page_is_FreeCRM()"
});
formatter.result({
  "duration": 14115031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prashantojha2706",
      "offset": 14
    },
    {
      "val": "Ojha@123",
      "offset": 38
    }
  ],
  "location": "loginStepdefination.user_clicks_on_username_and_password(String,String)"
});
formatter.result({
  "duration": 231165248,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 5312970843,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.user_is_on_the_HomePage()"
});
formatter.result({
  "duration": 8568575,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.user_moves_to_New_Contact_Page()"
});
formatter.result({
  "duration": 1808594440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jimmy",
      "offset": 29
    },
    {
      "val": "Carton",
      "offset": 41
    },
    {
      "val": "CFO",
      "offset": 54
    }
  ],
  "location": "loginStepdefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 2346656526,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.close_the_browser()"
});
formatter.result({
  "duration": 625510102,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM Create a Contact scenario",
  "description": "",
  "id": "free-crm-create-contact-feature;free-crm-create-a-contact-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is  on the FreeCRM Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the title of the page is  FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user  enters \"prashantojha2706\"  and \"Ojha@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on the HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to New Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Roger\" and \"Berton\" and \"CFO\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepdefination.user_is_on_the_FreeCRM_Login_Page()"
});
formatter.result({
  "duration": 38954838061,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.the_title_of_the_page_is_FreeCRM()"
});
formatter.result({
  "duration": 12743299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prashantojha2706",
      "offset": 14
    },
    {
      "val": "Ojha@123",
      "offset": 38
    }
  ],
  "location": "loginStepdefination.user_clicks_on_username_and_password(String,String)"
});
formatter.result({
  "duration": 631783734,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 4759159246,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.user_is_on_the_HomePage()"
});
formatter.result({
  "duration": 11161676,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.user_moves_to_New_Contact_Page()"
});
formatter.result({
  "duration": 1942574585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger",
      "offset": 29
    },
    {
      "val": "Berton",
      "offset": 41
    },
    {
      "val": "CFO",
      "offset": 54
    }
  ],
  "location": "loginStepdefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 2380902602,
  "status": "passed"
});
formatter.match({
  "location": "loginStepdefination.close_the_browser()"
});
formatter.result({
  "duration": 616972830,
  "status": "passed"
});
});