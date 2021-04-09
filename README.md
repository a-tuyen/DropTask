<!-- PROJECT LOGO -->
<p align=center>
    <img src=https://raw.githubusercontent.com/a-tuyen/to-do-list/master/documents/DROPTASK%3B.png alt=Logo width=200>



<!-- ABOUT THE PROJECT -->
## About The Project

!["Tasks Page"](https://raw.githubusercontent.com/a-tuyen/to-do-list/master/documents/mainpage.png)

DROPTASK; is a task manager app that lets you quickly input tasks and then sorts and displays it in an appropriate list for you.

Go ahead, enter in any movies you haven't gotten around to seeing yet, restaurants that are on your must-try list, hot new products that you've got your eye on or that NYT bestseller that you aspire to read one day. DROPTASK; will take care of the sorting and storing for you! 


### Built With

* Node
* Express
* PostgreSQL
* SCSS
* Ejs
* Google Custom Search

<!-- USAGE EXAMPLES -->
## Usage

As a new user, you will have to register.

Once you have logged in, you can view all of your current tasks and add additional tasks from the main page. Simply add in whatever your current task is "buy toothpaste", and it will automatically be added to the appropriate category.

You can click on an individual task to see additional information that has been generated, including an image & description. From here you can also make any edits to your task description and category.

Marking tasks as complete will move them to a seperate list where you can see all of your previous tasks, and deleting them will remove them completely.

In the event that DROPTASK; cannot find the appropriate category, you will be taken to the task page so you can manually write a description and category.



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Dependencies

Here is a list of the dependcies you will need to run the app.

* npm
  ```sh
  axios: ^0.21.1,
  body-parser: ^1.19.0,
  chalk: ^2.4.2,
  cookie-parser: ^1.4.5,
  dotenv: ^2.0.0,
  ejs: ^2.6.2,
  express: ^4.17.1,
  morgan: ^1.10.0,
  node-sass-middleware: ^0.11.0,
  pg: ^8.5.1,
  pg-native: ^3.0.0,
  pool: ^0.4.1
  ```

### Installation

1. Clone the repo
  git clone https://github.com/a-tuyen/to-do-list
2. Install NPM packages
  npm install
3. Get Google Custom Search API & CX KEY
  go here to register for keys: https://programmablesearchengine.google.com/about/
4. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
5. Update the .env file with your correct local information 
  - username: `[username]` 
  - password: `[username]` 
  - database: `[database]`
  - DB_KEY: `[YOUR API KEY]`
  - DB_CX: `[YOUR CX KEY]`
6. Fix to binaries for sass: `npm rebuild node-sass`
7. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
8. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
9. Visit `http://localhost:8080/`



## Screenshots

!["Welcome"](https://raw.githubusercontent.com/a-tuyen/to-do-list/master/documents/welcome.png)
!["Task ID page"](https://raw.githubusercontent.com/a-tuyen/to-do-list/master/documents/idpage.png)


<!-- CONTRIBUTING -->
## Contributors
- [Divya](https://github.com/DivyaJagadish)
- [Amanda](https://github.com/a-tuyen)
- [Colerk](https://github.com/Colerk)

