# Karma - Unit testing Tool

##Required tools:
Install Karma dependencies if not configured in package.json

   ```
   npm install karma-phantomjs-launcher --save-dev
   ```


   ```
   npm install karma-jasmine --save-dev
   ```


Run Default Application

   ```
   grunt serve
   ```

Run Unit Test cases from Karma

   ```
   Karma start ./test/karma.conf.js 
   ```

Run Karma test cases from grunt 

   ```
   grunt test
   ```

## Configuring the Karma unit test cases.

### 'Karma.conf.js'.
Mention list of files / patterns to load in the browser.

 - Make Sure all the Dependency JS file are mentioned. 
 [When new dependecy library are installed, bower should automatically update JS File entries]
 - Add the path of Source Scripts and Test JavaScript path in files array.


      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'

