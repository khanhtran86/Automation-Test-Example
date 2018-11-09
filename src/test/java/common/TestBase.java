package common;

public interface TestBase 
{
	/*
	MiscMethods miscmethodObj = new MiscMethods();
	NavigateMethods navigationObj = new NavigateMethods();
	AssertionMethods assertionObj = new AssertionMethods();
	ClickElementsMethods clickObj = new ClickElementsMethods();
	ConfigurationMethods configObj = new ConfigurationMethods();
	InputMethods inputObj = new InputMethods();
	
	JavascriptHandlingMethods javascriptObj = new JavascriptHandlingMethods();*/
	BrowserMethods navigationObj = new BrowserMethods();
	ProgressMethods progressObj = new ProgressMethods();
	ScreenShotMethods screenshotObj = new ScreenShotMethods();
}