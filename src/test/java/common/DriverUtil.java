package common;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.NoSuchSessionException;
import org.openqa.selenium.SessionNotCreatedException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.ErrorHandler;

public class DriverUtil {
	public static long DEFAULT_WAIT = 20;
    protected static WebDriver driver;

    public static WebDriver getDefaultDriver() {
		if (driver != null) {
			return driver;
		}
        System.setProperty("webdriver.chrome.driver", "C:\\webdrivers\\chromedriver.exe");
        //System.setProperty("webdriver.gecko.driver", "./geckodriver");
        DesiredCapabilities capabilities = null;
		capabilities = new DesiredCapabilities();
        capabilities.setJavascriptEnabled(true);
        capabilities.setCapability("takesScreenshot", true);
        driver = chooseDriver(capabilities);
        driver.manage().timeouts().setScriptTimeout(DEFAULT_WAIT,
                TimeUnit.SECONDS);
        driver.manage().window().maximize();
        return driver;
    }
    
    private static WebDriver chooseDriver(DesiredCapabilities capabilities) {
		String preferredDriver = System.getProperty("browser", "Firefox");
		boolean headless = System.getProperty("Headless", "true").equals("true");
		
		switch (preferredDriver.toLowerCase()) {
			case "firefox-":
				FirefoxOptions options = new FirefoxOptions();
				
				if (headless) {
					options.addArguments("-headless", "-safe-mode");
				}
				capabilities.setCapability(FirefoxOptions.FIREFOX_OPTIONS, options);
				final FirefoxDriver firefox = new FirefoxDriver();
				return firefox;
			default:
				final ChromeOptions chromeOptions = new ChromeOptions();
				chromeOptions.addArguments("--lang=vi");
				if (headless) {
					chromeOptions.addArguments("--headless");
				}
				capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
				System.out.println("********************* before driver created");
				ChromeDriver driver = new ChromeDriver();
				System.out.println("********************* after driver created");
				ErrorHandler handler = new ErrorHandler();
				handler.setIncludeServerErrors(false);
				driver.setErrorHandler(handler);
				return driver;
		}
    }
    
    public static void closeDriver() {
		if (driver != null) {
			try {
				driver.close();
				driver.quit(); // fails in current geckodriver! TODO: Fixme
			} catch (NoSuchMethodError nsme) { // in case quit fails
			} catch (NoSuchSessionException nsse) { // in case close fails
			} catch (SessionNotCreatedException snce) {} // in case close fails
			driver = null;
		}
	}
    
    
}
