# express-boilerplate
You will need to add your own .env file with DB_HOST & PORT.


### Challenge
1. Create a new npm project: authenticate
2. Using Express and express-session, build a basic server with the following routes:
Route	Description
    GET /	Should display 'Hello world!'
    GET /secure/welcome	Should display 'Secure page!' if the user is logged in, otherwise return a 401
    GET /secure/dog	Should display a dog photo if the user is logged in, otherwise return a 401
    GET /auth/login	Should log the user in and display 'You've logged in'
    GET /auth/logout	Should log the user out and display 'You've logged out'
3. Test everything works by using private browsing/incognito tabs.

### Beast Mode
1. Write some tests for your new app. Supertest is handy.
2. Implement a form on the login page with email and password fields.
3. Submitting the form with email: `admin@admin.com` and password: `password123` should log the user in and redirect them to /secure. Incorrect credentials should display a 'try again' message above the form.
4. Add a logout link to both secure pages.
5. Store multipe users in an object. Example:
{
  'admin@admin.com': 'password123',
  'jane@gmail.com': 'doggo'
}
6. Track login failures for each user.
7. Don't let a user login for 5 minutes if they fail login 5 times.
8. Track your users. Keep track of which page they look at and when.

### Beast Mode++
1. Create a registation form to add to your users object.