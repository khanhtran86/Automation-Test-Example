package stepdefinitions;

import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import com.gargoylesoftware.htmlunit.javascript.host.Console;

import common.DriverUtil;
import common.TestBase;
import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import pages.HomePage;
import pages.LoginPage;

public class LazadaLogin implements TestBase{
	protected WebDriver driver = DriverUtil.getDefaultDriver();
	protected LoginPage loginPage = new LoginPage(driver);
	
	@Given("^The user open login page$")
	public void the_user_open_login_page() throws Throwable {
	    
		navigationObj.navigateTo("https://member.lazada.vn/user/login?spm=a2o4n.home.header.d5.19056afecUrbw6&redirect=https%3A%2F%2Fwww.lazada.vn%2F");
		
	}

	@When("^Leave all field are blank and click Login button$")
	public void leave_all_field_are_blank_and_click_Login_button() throws Throwable {
	    loginPage.txtUserName.sendKeys("");
	    loginPage.txtPassword.sendKeys("");
	    
	    loginPage.btnLogin.submit();
	}

	@Then("^The User see the Error message below each field$")
	public void the_User_see_the_Error_message_below_each_field() throws Throwable {
	    Assert.assertEquals(loginPage.lbUserNameError.getText(), "You can't leave this empty.");
	    Assert.assertEquals(loginPage.lbPasswordError.getText(), "You can't leave this empty.");
	}

	@Then("^The input field is marked with red border$")
	public void the_input_field_is_marked_with_red_border() throws Throwable {
	    Assert.assertTrue(loginPage.rowUserName.getAttribute("class").toString().contains("error"));
	    Assert.assertTrue(loginPage.rowPassword.getAttribute("class").toString().contains("error"));
	}

	@When("^User input valid value for Email and Password$")
	public void user_input_valid_value_for_Email_and_Password() {
	    //loginPage.txtUserName.clear();
		loginPage.txtUserName.sendKeys(Keys.chord(Keys.CONTROL, "a", Keys.DELETE));
	    loginPage.txtUserName.sendKeys("khanh.tx@live.com");
	    
	    
	    //loginPage.txtPassword.clear();
	    loginPage.txtPassword.sendKeys(Keys.chord(Keys.CONTROL, "a", Keys.DELETE));
	    loginPage.txtPassword.sendKeys("abc123");
	    
	}

	@Then("^The Error message related to each field will be hide$")
	public void the_Error_message_related_to_each_field_will_be_hide() throws Throwable {
		
		Assert.assertEquals(loginPage.lbUserNameError.getText(), "");
	    Assert.assertFalse(loginPage.rowUserName.getAttribute("class").contains("error"));
	    Assert.assertEquals(loginPage.lbPasswordError.getText(), "");
	    Assert.assertFalse(loginPage.rowPassword.getAttribute("class").contains("error"));
	}

	@When("^User click clear button displayed on each field$")
	public void user_click_clear_button_displayed_on_each_field() throws Throwable {
	    loginPage.btnUserNameClear.click();
	    loginPage.btnPasswordClear.click();
	}

	@Then("^The corresponding content will be clear$")
	public void the_corresponding_content_will_be_clear() throws Throwable {
	    Assert.assertEquals(loginPage.txtUserName.getText(), "");
	    Assert.assertEquals(loginPage.txtPassword.getText(), "");
	}

	@When("^User click on show password button$")
	public void user_click_on_show_password_button() throws Throwable {
	    loginPage.btnShowPassword.click();
	}

	@Then("^The password should be displayed as plantext$")
	public void the_password_should_be_displayed_as_plantext() throws Throwable {
	    Assert.assertEquals(loginPage.txtPassword.getAttribute("type"), "text");
	}

	@When("^User click Login button$")
	public void user_click_Login_button() throws Throwable {
	    loginPage.btnLogin.click();
	}

	@Then("^User can see the loading icon while function is processsing$")
	public void user_can_see_the_loading_icon_while_function_is_processsing() throws Throwable {
	    Assert.assertTrue(loginPage.LoadingIcon.isDisplayed());
	    Assert.assertTrue(loginPage.pnlLoading.isDisplayed());
	}

	@When("^The User try to login with right username and wrong password$")
	public void the_User_try_to_login_with_right_username_and_wrong_password() throws Throwable {
		//loginPage.txtUserName.clear();
		loginPage.txtUserName.sendKeys(Keys.chord(Keys.CONTROL, "a", Keys.DELETE));
	    loginPage.txtUserName.sendKeys("khanh.tx@live.com");
	    
	    
	    //loginPage.txtPassword.clear();
	    loginPage.txtPassword.sendKeys(Keys.chord(Keys.CONTROL, "a", Keys.DELETE));
	    loginPage.txtPassword.sendKeys("abc123");
	    
	    loginPage.btnLogin.submit();
	}

	@Then("^User can see the popup message with wrong password notification$")
	public void user_can_see_the_popup_message_with_wrong_password_notification() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    Assert.assertTrue(loginPage.NotificationBox.isDisplayed());
	    Assert.assertEquals(loginPage.NotificationContent.getText(), "Incorrect username or password.");
	}

	@When("^The User login with right credential$")
	public void the_User_login_with_right_credential() throws Throwable {
		//loginPage.txtUserName.clear();
		loginPage.txtUserName.sendKeys(Keys.chord(Keys.CONTROL, "a", Keys.DELETE));
	    loginPage.txtUserName.sendKeys("khanh.tx@live.com");
	    
	    
	    //loginPage.txtPassword.clear();
	    loginPage.txtPassword.sendKeys(Keys.chord(Keys.CONTROL, "a", Keys.DELETE));
	    loginPage.txtPassword.sendKeys("abc123456");
	    
	    loginPage.btnLogin.submit();
	}

	@Then("^User can see their profile i;nformation$")
	public void user_can_see_their_profile_information() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    HomePage homePage = new HomePage(this.driver);
	    Assert.assertTrue(homePage.AccountInfo.getText().contains("Trần Xuân Khanh"));
	    
	}
}
