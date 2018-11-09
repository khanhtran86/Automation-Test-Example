package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	WebDriver driver;
	
	@FindBy(css=".mod-login-input-loginName")
	public WebElement rowUserName;
	@FindBy(css=".mod-login-input-loginName input")
	public WebElement txtUserName;
	@FindBy(css=".mod-login-input-loginName span")
	public WebElement lbUserNameError;
	@FindBy(css=".mod-login-input-loginName .mod-input-close-icon")
	public WebElement btnUserNameClear;
	
	@FindBy(css=".mod-login-input-password")
	public WebElement rowPassword;
	@FindBy(css=".mod-login-input-password input")
	public WebElement txtPassword;
	@FindBy(css=".mod-login-input-password span")
	public WebElement lbPasswordError;
	@FindBy(css=".mod-login-input-password .mod-input-close-icon")
	public WebElement btnPasswordClear;
	@FindBy(css=".mod-login-input-password .mod-input-password-icon")
	public WebElement btnShowPassword;
	
	@FindBy(css=".mod-login-btn button")
	public WebElement btnLogin;
	
	@FindBy(css=".mod-loading")
	public WebElement pnlLoading;
	@FindBy(css=".lzd-loader")
	public WebElement LoadingIcon;
	
	@FindBy(css=".mod-fusion-toast")
	public WebElement NotificationBox;
	@FindBy(css=".next-feedback-content")
	public WebElement NotificationContent;
	
	public LoginPage(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
}
