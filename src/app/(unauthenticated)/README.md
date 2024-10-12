### Unauthenticated Route Groups

This is where all public routes in the app are located.
These are routes that can be accessed without authentication.

For more information on NextJS Route Groups:
https://nextjs.org/docs/app/building-your-application/routing/colocation#route-groups

#### Logout Page Exception

Routes grouped in this folder are only supposed to be for unauthenticated users which,
for the purpose of this app, would only apply to the **Login** or **Registration** page.

However, there is a special exception for the **Logout** page. This route is protected from the middleware
so that it is not accessible unless a user is authenticated BUT for this special page, we want to present
the layout as if a user is already logged out. By grouping this page under (unauthenticated) we gain the
benefit of using the exisiting layout.
