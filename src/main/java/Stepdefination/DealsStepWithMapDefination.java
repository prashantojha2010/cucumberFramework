package Stepdefination;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealsStepWithMapDefination {
	
	WebDriver driver;

	@Given("^user is  on the FreeCRM Login Page$")
	public void user_is_on_the_FreeCRM_Login_Page(){
		
	System.setProperty("webdriver.chrome.driver", "C:\\chromedriver\\chromedriver.exe");
	driver= new ChromeDriver();
	driver.manage().window().maximize();
	driver.get("https://classic.crmpro.com/index.html");
	}
	
	@When("^the title of the page is  FreeCRM$")
	public void the_title_of_the_page_is_FreeCRM() throws Throwable {
	String title = driver.getTitle();
	Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title); 
	}

	@Then("^user  enters username  and password$")
	public void user_enters_username_and_password(DataTable credentials) throws Throwable {
	for (Map<String,String>  data : credentials.asMaps(String.class, String.class)) {
	driver.findElement(By.name("username")).sendKeys(data.get("username"));
	driver.findElement(By.name("password")).sendKeys(data.get("password"));
	}
	}

	@Then("^user clicks on submit button$")
	public void user_clicks_on_submit_button() throws Throwable {
	WebElement loginBtn =driver.findElement(By.xpath("//input[@type='submit']"));
	JavascriptExecutor js = ((JavascriptExecutor)driver);
	js.executeScript("arguments[0].click();", loginBtn);
	}

	@Then("^user is on the HomePage$")
	public void user_is_on_the_HomePage() throws Throwable {
	String homePageTitle= driver.getTitle();
	System.out.println(homePageTitle);
	Assert.assertEquals("CRMPRO", homePageTitle);
	}
	
	@Then("^user moves to New Deal Page$")
	public void user_moves_to_New_Contact_Page() throws Throwable {
	driver.switchTo().frame("mainpanel");
	Actions action = new Actions(driver);
	action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
	driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	}
	
	@Then("^user enters deal details$")
	public void user_enters_deal_details(DataTable dealData) throws Throwable {
	for(Map<String,String>  data : dealData.asMaps(String.class, String.class)) {	
	driver.findElement(By.xpath("//input[@id='title']")).sendKeys(data.get("title"));
	driver.findElement(By.xpath("//input[@id='amount']")).sendKeys(data.get("amount"));
	driver.findElement(By.xpath("//input[@id='probability']")).sendKeys(data.get("probability"));
	driver.findElement(By.xpath("//input[@id='commission']")).sendKeys(data.get("commission"));	
	driver.findElement(By.xpath("//input[@value='Save' and @type='submit']")).click();
	
	Actions action = new Actions(driver);
	action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
	driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	}
	
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
    driver.quit();
	}
}
