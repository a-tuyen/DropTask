### SMART TO-DO APP

## APP REQUIREMENTS 

Option 6: Smart TODO List

When you are recommended something it's not always easy to jot it down for later in an organized fashion. Adding the item to your phone or computer ends up taking time and opening up the right app is only part of the problem. You then have to locate the right list ("Movies to watch", "Books to read", etc.) to add to. And if you do get it in to the right list, you don't have much more context about it. This delay and lack of additional information acts as a huge deterrent.

The solution? A smart, auto-categorizing todo list app. The user simply has to add the name of the thing, and it gets put into the correct list.
Requirements:

Each todo created should be categorized as one of:

    Film / Series (To watch)
    Restaurants, cafes, etc. (To eat)
    Books (To read)
    Products (To buy)

In order to determine the category the app will probably need to use various API services such as those offered by Google, Wolfram Alpha, Rotten Tomatoes, Amazon, Yelp and others.

API services mentioned above are only suggestions. You will have to investigate how to balance the accurate categorization of items with having to deal with multiple API endpoints.

Users should be able to change a category of an item in case it was mis-categorized or could not be categorized at all.

Users should be able to register, log in, log out and update their profile.

### User Stories
As a ___, I want to _, because ____.

Users: resgistered user and Non registered user

As a non-user, I want to register, because I want to create a profile and use the app.
As a user, I want to log in, because I want to track my to do's.
As a user, I want to log out, because I dont want others to see my tasks.
As a user, I want to update my user profile (user information), because my details can change.

As a user, I want to create to-do's, because I have a grow list (new things).

As a user, I want to edit the task title, because things can change.
As a user, I want to edit the task category, because things can change.

As a user, I want to delete, because I have completed an app (moved to completed table).
As a user, I want to delete to-do's, because I no longer need to do it.

As a user, I want to see the count of tasks, because I like knowing how long it is.
As a user, I want to see all of my tasks in one place, because I need to know what to do.



## Paths
IF NOT LOGGED IN - / app.get('/') - Render text to direct user to resiger/login
LOGIN - app.get('/login:id') - redirect to '/tasks'

B app.get('/tasks')
R app.get('/tasks/:id')
E app.post('/tasks/:id/edit')
A app.post('/tasks/:id')
D app.post('/tasks/:id/delete')

### Databases
## Tables:
User
- id SERIAL PRIMARY KEY NOT NULL
- name VARCHAR(255)
- Email VARCHAR(255)
- password VARCHAR(255)

Tasks
- id SERIAL PRIMARY KEY NOT NULL 
- user_id INTERGER REFERENCES user(id)
- Category_id INTERGER REFERENCES categories(id)
- title VARCHAR(255)
- detail TEXT
- created_at TIMESTAMP
- due_date DATE
- completed_date TIMESTAMP

Categories
- id SERIAL PRIMARY KEY NOT NULL 
- task_id INTERGER REFERENCES tasks(id)
- type VARCHAR(255)

## API's
<!-- AMAZON - http://api-doc.axesso.de/#api-Amazon
- products
- movies
- books

BING - https://docs.microsoft.com/en-us/bing/search-apis/bing-web-search/search-responses#querycontext-answer
- restaurants
- general query and servey response  -->

1. YELP - check for restaurants

2. WOLFRAM ALPHA - https://products.wolframalpha.com/short-answers-api/explorer/
- ask questions and get quick responses
- check if query is a book or movies

3. EBAY - https://developer.ebay.com/devzone/shopping/docs/CallRef/FindProducts.html#Samples
- check for products

4. If no response, have a defaiult handler that lets the user specify in event of no response.

## Tech Choices
- scss
- AJAX / JQuery
- HTML
- Node / Express
- Boostrap / Flexbox

## Work division
API / Data
- What kind of data do we get
- What ones do we need
- How do we use them
Look into libraries
Paths/Routes
Databases / queries
Front-end

## Schedule
Sat - look into libraries / API - finish project scoping / outline
      / pseudo code
Sun - start baseline
- Get submit for live to run queries
  (routes ready for submit page)
- set up database / tables
- have query return search results and filter into correct categories/table
Mon - Code
Tues - All the functional requirements met
Wed - Making it look nice
Thus - Finish addressing bugs and finalize / post

## Stretch
Load new tasks in real time
Dynamic view for how many categories to view
Complete button to show finished todos

<!-- ## queries
Set up queries in a file and routes in another. Create the function to run the query and return the promise (.then). In another file import those functions and create the routes that help the html use those queries (create the app.get('/'. (req, res) => {
  return - run the function that does the query
  .then ((thing) => {
    do the thing you wanted with the query
    (res.JSON(thing))
  })
})) -->

