# fakeID
FakeID is an application that allows developers to do to create fake user data for applications.

Developing applications that use nemID for authenticating and getting users personal information can be complicated, as it cannot be done without using real data. FakeID is meant to replace NemID in the development stages of those applications so that no real user data is used or compromised.


## Prerequisites:
    Before you begin, ensure you have met the following requirements, the application can be run on Windows/Mac/Linux OSs.

    You have installed Xampp/Wamp/Mamp.
    You have installed the PHP v. 7 or higher, Angular Cli v. 11 and NodeJS vs 14.


## Getting started with FakeID:
In order to run the application locally, make sure you have met the abovementioned prerequisites.

### LAMP project:

- The project should be saved in the htdocs folder in your Xampp/Mamp (If you are using Wamp, the folder is called www)
- Open Xampp/Mamp/Wamp and start Apache and MySQL servers.
- Open your browser and visit: localhost/fakeid/lamp/
- If you want to view the application with data, you can import the database using phpMyAdmin
- Open http://localhost/phpmyadmin/
- Click import in the top bar.
- select fakeid.sql in the lamp directory and press go.


### MERN stack
 - Open a terminal and navigate to fakeid/mern/server.
 Install packages:
     - npm i.
 - Start the server:
    - nodemon server.js
 - Open another terminal and navigate to fakeid/mern/client/fakeid.
- Install packages:
    - npm i .
 start the React application, it will open automatically in your browser.
    - npm run start

### MEAN stack
 - Open a terminal and navigate to fakeid/mean/server.
 Install packages:
        npm i.
 - Start the server:
    - nodemon server.js
 - Open another terminal and navigate to fakeid/mean/client/fakeid.
- Install packages:
    - npm i .
 start the Angular application, it will open automatically in your browser.
    - ng serve --open

## Using FakeID:
    To create new users, press create in the top navigation bar.
    To edit users press the edit button for each user and change their name and/or address. If the user is not a child or an employee you can also change their marital status, add spouses (if not in a relationshin) and children.

## Contributing to FakeID?


## Testing 
    In order to run tests you will need to download PHPUnit other testing frameworks used will be downloaded once npm i is run in each folder.

    E2e tests are found in a cypress folder in the root directory of each stack (client/fakeid for MERN and MEAN). the first time they are run you will have to type in the terminal (in the appropriate directory):
 ```
 ./node_modules/.bin/cypress run
 ```
    Then you can select which of the test files you want to run (ignore the example folder). Keep in mind that the tests are made with specific data in mind, and it might not match the data on your machine, so feel free to change accordingly.

    To run Unit tests for backend:
#### In LAMP:
 ```
vendor/bin/phpunit
 ```
#### In MEAN/MERN (server folder):
 ```
 npm run test
 ```


## Contact
    Elísabet Valsdóttir : elberoest@gmail.com and Ekaterina Gerhardt Petersen : katya.korinka@gmail.com.

    Project Link: https://github.com/ekaterinagp/fakeID

## License
This project uses the following license: 
[MIT](https://choosealicense.com/licenses/mit/)


