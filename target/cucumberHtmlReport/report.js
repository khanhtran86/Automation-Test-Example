$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/lazadalogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login On Lazada.vn",
  "description": "As a User\nI want to Login to Lazada.vn\nSo that I may create an order with some favourite products",
  "id": "login-on-lazada.vn",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Display Error message with out information for Username and Password",
  "description": "",
  "id": "login-on-lazada.vn;display-error-message-with-out-information-for-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "The user open login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Leave all field are blank and click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The User see the Error message below each field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "The input field is marked with red border",
  "keyword": "And "
});
formatter.match({
  "location": "LazadaLogin.the_user_open_login_page()"
});
formatter.result({
  "duration": 12327322880,
  "status": "passed"
});
formatter.match({
  "location": "LazadaLogin.leave_all_field_are_blank_and_click_Login_button()"
});
formatter.result({
  "duration": 1777329067,
  "status": "passed"
});
formatter.match({
  "location": "LazadaLogin.the_User_see_the_Error_message_below_each_field()"
});
formatter.result({
  "duration": 199283200,
  "status": "passed"
});
formatter.match({
  "location": "LazadaLogin.the_input_field_is_marked_with_red_border()"
});
formatter.result({
  "duration": 103889493,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Hide corresponding message with valid value for Username and Password",
  "description": "",
  "id": "login-on-lazada.vn;hide-corresponding-message-with-valid-value-for-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Leave all field are blank and click Login button",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User input valid value for Email and Password",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The Error message related to each field will be hide",
  "keyword": "Then "
});
formatter.match({
  "location": "LazadaLogin.leave_all_field_are_blank_and_click_Login_button()"
});
formatter.result({
  "duration": 206574080,
  "status": "passed"
});
formatter.match({
  "location": "LazadaLogin.user_input_valid_value_for_Email_and_Password()"
});
formatter.result({
  "duration": 1730499414,
  "status": "passed"
});
formatter.match({
  "location": "LazadaLogin.the_Error_message_related_to_each_field_will_be_hide()"
});
formatter.result({
  "duration": 172561493,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "The User can clear content on Username and Password field",
  "description": "",
  "id": "login-on-lazada.vn;the-user-can-clear-content-on-username-and-password-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User input valid value for Email and Password",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User click clear button displayed on each field",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "The corresponding content will be clear",
  "keyword": "Then "
});
formatter.match({
  "location": "LazadaLogin.user_input_valid_value_for_Email_and_Password()"
});
formatter.result({
  "duration": 3162957227,
  "status": "passed"
});
formatter.match({
  "location": "LazadaLogin.user_click_clear_button_displayed_on_each_field()"
});
formatter.result({
  "duration": 714235734,
  "status": "passed"
});
formatter.match({
  "location": "LazadaLogin.the_corresponding_content_will_be_clear()"
});
formatter.result({
  "duration": 216076373,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "The User can see password as plan text on password field",
  "description": "",
  "id": "login-on-lazada.vn;the-user-can-see-password-as-plan-text-on-password-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User input valid value for Email and Password",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User click on show password button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The password should be displayed as plantext",
  "keyword": "Then "
});
formatter.match({
  "location": "LazadaLogin.user_input_valid_value_for_Email_and_Password()"
});
formatter.result({
  "duration": 2359851520,
  "status": "passed"
});
formatter.match({
  "location": "LazadaLogin.user_click_on_show_password_button()"
});
formatter.result({
  "duration": 235027627,
  "status": "passed"
});
formatter.match({
  "location": "LazadaLogin.the_password_should_be_displayed_as_plantext()"
});
formatter.result({
  "duration": 70227200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "The Loading should be showed when function is processing",
  "description": "",
  "id": "login-on-lazada.vn;the-loading-should-be-showed-when-function-is-processing",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User input valid value for Email and Password",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User can see the loading icon while function is processsing",
  "keyword": "Then "
});
formatter.match({
  "location": "LazadaLogin.user_input_valid_value_for_Email_and_Password()"
});
formatter.result({
  "duration": 2937879893,
  "status": "passed"
});
formatter.match({
  "location": "LazadaLogin.user_click_Login_button()"
});
formatter.result({
  "duration": 77230080,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".mod-login-btn button\"}\n  (Session info: chrome\u003d70.0.3538.77)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-S9PLHGH\u0027, ip: \u002710.10.15.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\KHANHT~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:57862}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.77, webStorageEnabled: true}\nSession ID: e634040fbc1b56c711a9ccc4526ee520\n*** Element info: {Using\u003dcss selector, value\u003d.mod-login-btn button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat stepdefinitions.LazadaLogin.user_click_Login_button(LazadaLogin.java:92)\r\n\tat ✽.When User click Login button(resources/lazadalogin.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LazadaLogin.user_can_see_the_loading_icon_while_function_is_processsing()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "The User can see message notify that password is wrong after login with wrong password",
  "description": "",
  "id": "login-on-lazada.vn;the-user-can-see-message-notify-that-password-is-wrong-after-login-with-wrong-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "The user open login page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "The User try to login with right username and wrong password",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User can see the popup message with wrong password notification",
  "keyword": "Then "
});
formatter.match({
  "location": "LazadaLogin.the_user_open_login_page()"
});
formatter.result({
  "duration": 6676229546,
  "status": "passed"
});
formatter.match({
  "location": "LazadaLogin.the_User_try_to_login_with_right_username_and_wrong_password()"
});
formatter.result({
  "duration": 3439787,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefinitions.LazadaLogin.the_User_try_to_login_with_right_username_and_wrong_password(LazadaLogin.java:104)\r\n\tat ✽.When The User try to login with right username and wrong password(resources/lazadalogin.feature:34)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "LazadaLogin.user_can_see_the_popup_message_with_wrong_password_notification()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 37,
  "name": "The User can see their profile information after login successfully",
  "description": "",
  "id": "login-on-lazada.vn;the-user-can-see-their-profile-information-after-login-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "The user open login page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "The User login with right credential",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User can see their profile information",
  "keyword": "Then "
});
formatter.match({
  "location": "LazadaLogin.the_user_open_login_page()"
});
formatter.result({
  "duration": 3106439253,
  "status": "passed"
});
formatter.match({
  "location": "LazadaLogin.the_User_login_with_right_credential()"
});
formatter.result({
  "duration": 324266,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefinitions.LazadaLogin.the_User_login_with_right_credential(LazadaLogin.java:116)\r\n\tat ✽.When The User login with right credential(resources/lazadalogin.feature:39)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "LazadaLogin.user_can_see_their_profile_information()"
});
formatter.result({
  "status": "skipped"
});
});