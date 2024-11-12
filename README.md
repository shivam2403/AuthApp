# Login Page
Users can log in using their username and password.
The application handles invalid login attempts (incorrect username or password).
Validation is applied to ensure that the username and password fields are not empty.

# Signup Page
New users can sign up by creating an account with a username and password.
The password must be at least 6 characters long.

# Homepage
After logging in, users are redirected to the Homepage.
The homepage displays a list of all registered users with their username and full name.
A search bar is available to search for users by name or username.
Users can view a list of registered users in the homepage and search any user by their Name.
Logout button to securely log out of the application.

# Profile Pictures
Each user will have a default profile picture based on their gender:
Male: Default male avatar.
Female: Default female avatar.

# Logout Functionality
A logout button is available on the homepage.
When logged out, users are redirected back to the login page.

# Security Measures
Hashing passwords before storing them in the database to protect user credentials.
JWT-based authentication for secure login and session management.

# Steps to install 
1. Navigate to directory of backend and frontend
    - cd backend
    - cd frontend
2. Run 'npm install' command in both backend and frontend directories
3. To run backend - npm start
4. To run frontend - npm run dev