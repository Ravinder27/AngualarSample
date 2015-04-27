# Protractor - End to End Testing Automation Framework 
Add Protractor Support and Configuration files

##Required tools:

Install Protractor - Add Protractor in Dev Dependencies in Package.json.

   ```
   "protractor": "~1.8.0"
   ```

Optional 

   ```
  npm install -g protractor
   ```
   
Install Protractor Web drivers for e2e Testing - Chrome Driver and Selenium Server Stand alone.

   ```
    ./node_modules/protractor/bin/webdriver-manager update
   ```

## Setup the Configuration and Spec files.
  - Folder Structure
  
        'e2e-tests' Folder - contains all details about e2e testing 
      
          'pageobjects' Folder - https://github.com/angular/protractor/blob/master/docs/page-objects.md
           Page Objects help you write cleaner tests by encapsulating information about the elements on your application page.
           A Page Object can be reused across multiple tests, and if the template of your application changes, you only need to update the Page Object.
        
          'scenarios' Folder - Test Cases JavaScript File.
        
          'configuration' file  - Test Cases to run, browser, URL
          
## Run Configuration file from protractor

   ```
    ./node_modules/protractor/bin/webdriver-manager ./e2e-tests/sampleconf.js
   ```

## Configure Protractor in Grunt. 
          
          




