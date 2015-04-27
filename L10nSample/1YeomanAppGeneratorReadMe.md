# Yeoman — Generate Sample App with Yeoman Generator having default support for Grunt and Karma.

##Required tools:

   ```
   npm install -g yo bower grunt-cli
   ```

Installing Web App generator

   ```
   npm install -g generator-webapp
   ```


Installing Web AngularJS App Generator

   ```
   npm install -g generator-angular
   ```


Creating application

   ```
   npm install -g generator-angular
   ```

Install dependencies mentioned in package.json

   ```
   npm install
   ```

## Running local grunt server

   ```
   grunt serve
   ```

On running the server, grunt will automatically update the index.html about dependent JS Files.
Example

- Install local storage

    ```
    bower install --save angular-local-storage
    ```


- Observe index.html and bower.json will be automatically updated with local storage entries 

    ```
    <script src="bower_components/angular-local-storage/dist/angular-local-storage.js"></script>
    ```

    ```
    "angular-local-storage": "~0.1.5"
    ```




## Adding Support for Localization.
### Configuration
1.Update the bower.json to Support "angular-translate" library in dependencies

   ```
   "angular-translate" : "~2.4.2"
   ```

2.Run Bower update command to download the newly added dependency "angular-translate" library

   ```
   bower update
   ```

3.Make sure it as embedded it in your index.html document.

   ```
   <script src="path/to/angular-translate.js"></script>
   ```


4.Inject angular-translate module as a dependency into your app:

   ```
   var app = angular.module('myApp', ['pascalprecht.translate']);
   ```
   
### Adding String to Application.

1.Add the Default Set of Strings.
