package khanhtx.cucumberSelenium;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	plugin = {"html:target/cucumberHtmlReport"},
	features = "classpath:resources",
	glue = {"stepdefinitions"}
)

public class AppTest {
}
