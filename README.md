# fakeID
FakeID is an application that allows developers to create fake user data for applications.

Developing applications that use nemID for authenticating and getting users personal information can be complicated, as it cannot be done without using real data. FakeID is meant to replace NemID in the development and testing stages of those applications so that no real user data is used or compromised.


## Prerequisites:
Before being able to run this application locally, ensure that the following requirements are met, the application can be run on Windows/Mac/Linux OSs.

- XAMPP/WAMP/MAMP
- Mongo shell
- Angular CLI v. 11 and NodeJS v. 14
- Nodemon
- Composer


## Getting started with FakeID:
In order to run the application locally, make sure to have met the abovementioned prerequisites.

### LAMP stack:

- The project should be saved in the htdocs folder in XAMPP/MAMP (If using WAMP, the folder is called www)
- Open XAMPP/WAMP/MAMP and start Apache and MySQL servers.
- Open a browser and visit: localhost/fakeid/lamp/

- To view the application with ready made data, it is possible to import a database using phpMyAdmin
- Open http://localhost/phpmyadmin/
- Click import in the top bar.
- select fakeid.sql in the lamp directory and press go.


### MERN stack
 - Open a terminal and navigate to fakeid/mern/server.
 Install packages:
 ```
 npm i
 ```
  - Start the server:
 ```
nodemon server.js
```
 - Open a another terminal and start a mongo server:
 ```
mongod
 ```
- Open another terminal and navigate to fakeid/mern/client/fakeid.
- Install packages:
 ```
npm i
```
 - start the React application, it will open automatically in your browser.
```
npm run start
```

### MEAN stack
 - Open a terminal and navigate to fakeid/mean/server.
 - Install packages:
 ```
 npm i
 ```
 - Start the backend server:
 ```
nodemon server.js
 ```
 - Open a another terminal and start a mongo server:
```
mongod
```
- Open another terminal and navigate to fakeid/mean/client/fakeid.
- Install packages:
 ```
 npm i
```
 - start the Angular application, it will open automatically in your browser.
 ```
 ng serve --open
 ```


To view the MERN and MEAN app with ready made data, it is an option to import our data file. The easiest way would be to use Mongo Compass but it is also possible using Mongo Shell
- Mongo Compass:
  - Create a databases fakeid with the collection users
  - Select the collection and press add data in the top left corner, then select the file in the mern server folder.
- Mongo shell
 ```
 mongoimport --db fakeid --collection users --drop --file <path-to-file>fakeid.json
 ```

 
## Using FakeID:

To create new users, press create in the top navigation bar.
 To edit users press the edit button for each user and change their name and/or address. If the user is not a child or an employee their marital status can be changed, spouses added (if not in a relationshin) as well as children.


## Testing 
In order to run tests([PHPUnit](https://phpunit.de/getting-started/phpunit-9.html)) is needed other testing frameworks used will be downloaded once npm i is run in each folder. 
Please remember to update tests as needed.

 E2e tests are found in a cypress folder in the root directory of each stack (client/fakeid for MERN and MEAN). To run open a terminal (in the appropriate directory):
   ```
npm run cypress
 ```
 or
 ```
 ./node_modules/.bin/cypress run
 ```

Then select a test file to run. Be aware that the tests are made for specific data, and it might not match the data on each machine, so feel free to change accordingly.

## To run Unit tests for backend:
#### In LAMP:
 ```
vendor/bin/phpunit
 ```
#### In MEAN/MERN (server folder):
 ```
 npm run test
 ```


## Contact
Elísabet Valsdóttir : elberoest@gmail.com and Ekaterina Gerhardt Petersen : katya.koriakina@gmail.com.

Project Link: https://github.com/ekaterinagp/fakeID

## License
This project uses the following license: [MIT](https://choosealicense.com/licenses/mit/)
