/**
 * Created by sharp on 4/21/15.
 */

describe('Sample',function(){

  it('Launch', function() {
    var targetUrl = 'http://localhost:9000/';

    console.log(targetUrl);
    browser.driver.manage().window().maximize();
    browser.driver.get(targetUrl);
    expect(browser.getTitle()).toBe('http://localhost:9000/#/')

    browser.driver.findElement(By.id('inputItem')).sendKeys('Item12');
    browser.driver.findElement(By.id('Add')).click();
    browser.driver.sleep(2000);

    expect(browser.driver.findElement(By.id('test')).getAttribute('value')).toBe('Item12');
    //expect(element(by.id('test').getAttribute('value'))).toBe('Item12');
   // expect(browser.driver.findElement(By.id('test')).getAttribute('value')).toBe('Item1');

  });
});
