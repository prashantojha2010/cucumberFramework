
package MyRunner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features= "C:\\Users\\Prashant Ojha\\eclipse-workspace\\CucumberDemo1\\src\\main\\java\\Features\\dealsmap.feature"	,
glue= {"Stepdefination"},
plugin= {"pretty","html:test-output", "json:json_output\\cucumber.json", "junit:junit_output\\cucumber.xml"},
monochrome= true,
strict= true,
dryRun= false
)

public class TestRunner {

}
