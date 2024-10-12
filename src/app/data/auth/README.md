### Authentication

[Next-Auth.js](https://next-auth.js.org/) is implemented for authentication with the API, specifically using
Credential authentication since thats what the API supports.

When a user enters their credentials to login, NextAuth will make a call to our API to get an authToken for
the user. That authToken is stored within the JWT cookie that gets sent to the browser.

When a user decides to logout, NextAuth will remove the JWT cookie and redirect the user back to the Login page.

#### Gatekeeping Routes

NextAuth combined with Middleware.ts allows us to prevent users from accessing routes that require authentication.
Users that are not authenticated can only access the Login and Register pages, attempting to access any other page
while unauthenticated will redirect you back to the Login page.

#### Token Refresh

Part of the JWT claims that we write include an expiration date of the API token, if the JWT is expired we will
attempt to refresh the authToken by calling the API and getting a new one.

Currently the API token expires every 10 hours and NextAuth will attempt to refresh the token after 9 hours.
