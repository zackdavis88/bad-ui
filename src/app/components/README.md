### Components

This is where all the components for the app will live, components will fall under one of three categories:

1. Page components - These components get rendered on each specific page.

   - For example, the `LoginForm` only gets rendered
     on the Login Page and nowhere else. Therefore it lives within the `login-page` folder in this directory.

2. Common components - These components are rendered in multiple places throughout the app.

   - For example, the `StyledModal` is generic
     and will be used as a wrapped around all modal content.

3. Skeleton components - These are rendered as fallbacks for React.Suspense and allow us to visually indicate that content is loading
   without having to do a major layout shift once the content does load.
