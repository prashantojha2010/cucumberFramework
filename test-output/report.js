$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Prashant Ojha/eclipse-workspace/CucumberDemo1/src/main/java/Features/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Create Deal feature",
  "description": "",
  "id": "create-deal-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a Deal scenario",
  "description": "",
  "id": "create-deal-feature;free-crm-create-a-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "user  enters username  and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "prashantojha2706",
        "Ojha@123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on the HomePage",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user moves to New Deal Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "40",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "30",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefination.user_is_on_the_FreeCRM_Login_Page()"
});
formatter.result({
  "duration": 13493049483,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.the_title_of_the_page_is_FreeCRM()"
});
formatter.result({
  "duration": 7485765,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 275263878,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 12160940085,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.user_is_on_the_HomePage()"
});
formatter.result({
  "duration": 30015929,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.user_moves_to_New_Contact_Page()"
});
formatter.result({
  "duration": 4451197045,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 13595492119,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefination.close_the_browser()"
});
formatter.result({
  "duration": 633562417,
  "status": "passed"
});
});