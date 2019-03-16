package Stepdefination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

public class loginStepdefination {
	
public static WebDriver driver;
	
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

	@Then("^user  enters \"(.*)\"  and \"(.*)\"$")
	public void user_clicks_on_username_and_password(String username , String password) throws Throwable {
	driver.findElement(By.name("username")).sendKeys(username);
	driver.findElement(By.name("password")).sendKeys(password);
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
	
	@Then("^user moves to New Contact Page$")
	public void user_moves_to_New_Contact_Page() throws Throwable {
	   driver.switchTo().frame("mainpanel");
	   Actions action = new Actions(driver);
	   action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
	   driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	}

	@Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and_and(String firstName, String lastName, String position) throws Throwable {

		driver.findElement(By.xpath("//input[@id='first_name']")).sendKeys(firstName);
		driver.findElement(By.xpath("//input[@id='surname']")).sendKeys(lastName);
		driver.findElement(By.xpath("//input[@id='company_position']")).sendKeys(position);
		driver.findElement(By.xpath("//input[@type='submit'  and @class='button']")).click();
	}
	
	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		driver.quit();
	}

}



