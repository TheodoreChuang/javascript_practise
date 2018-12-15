Create a cheap eats counter API that...
    - authenticates with username/password & OAuth
    - authorizes with JWT
    - excepts url encoded & JSON data
    - only responds with JSON

Endpoints
USERS
GET /user //user information
POST /register
    - email
    - password
    - name
POST /login
    - email
    - password
PUT/PATCH /user //update user information

EATS
GET /eats //list of all eats
POST /eats //start keeping track of a new eat
    - name (pizza, burger, wrap, ban hmi, sushi rolls, salad)
    - price
    - locations
        - location
        - times ate for each user
        - timestamps //array of timestamps
PUT/PATCH /eats/:id/increment //increase the amount of an existing eat and adds a timestamp
    - location
PUT/PATCH /eats/:id/decrement //decrease the amount of an existing eat and removes last timestamp
    - location
PUT/PATCH /eats/:id //update eat information

LOCATIONS
GET /locations //list of locations
POST /locations //where they had their eats
    -name
    -city
    -state
    -country
PUT/PATCH /locations/:id //update location details