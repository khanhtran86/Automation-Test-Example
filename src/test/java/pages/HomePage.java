package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	
	@FindBy(css="#myAccountTrigger")
	public WebElement AccountInfo;
	
	public HomePage(WebDriver driver)
	{
		PageFactory.initElements(driver, this);
	}
}
