# Coding challenge
This is a site where those interested in programming can select the programming language they are interested in, make programming challenges and get points.
## repo server 
server Link :[server](https://github.com/MP-Project-Nouf/server)
## repo client 
client Link :[client](https://github.com/MP-Project-Nouf/client)
# Heroku:
Heroku Link:[visit](https://codingchallenge-frontend.herokuapp.com/)

While running locally:

# Trello:
Trello Link :[trello](https://trello.com/b/yelGfTJ9/teaching-weekly-planning)

# slides
presentation slides Link :[prezi](https://prezi.com/p/edit/4wyaz0nyy0v7/)

# Visitor story
as visitor I can:

* See challenges without opening them
* View the leaderboards
* register on the platform


# User Story:
as a user I can:

* Log in to the platform after activating my account
* Change the password when I forget it by sending a code to my email
* Create my profile
* Do coding challenges
* Accumulate points for solving each challenge
* Get into the leaderboard when I get more points
* When I get advanced points I can create challenges
* My profile can contain a picture of me, my full name, my points, my favorite programming languages, my personal information, my accounts in social networking sites, educational level, training certificates, the challenges I solved and the challenges I created
* Adding and editing to my profile
* When I solve the challenge, I can see other users' solutions to this challenge
* Inquire about the challenge in comment on the challenge page
* Access to the profile of any user from the leaderboards
* delete my account

# Admin Story:
as admin I can:

* Access to any user by usernme and access to his profile
* spam any user
* Create a challenge
* Edit Challenge
* delete any challenge
* delete any comment
* confirm challenge that created by user

# Getting Started
## Installing Dependencies
### Node js
Follow instructions to install the latest version of Node js for your platform in the [ Node js docs](https://nodejs.org/en/)
### NPM Dependencies
Once you have the project in your local machine, install dependencies by running:
```
 npm install
  ```
  This will install all of the required packages.
### Key Dependencies
* [ React](https://reactjs.org/)  A JavaScript library for building user interfaces.
* [ firebase ](https://www.npmjs.com/package/firebase)  provides the tools and infrastructure you need to develop, grow, and earn money from your app.
*  [ axios ](https://www.npmjs.com/package/axios) is a promise based HTTP client for the browser and node.js.
* [ redux](https://www.npmjs.com/package/redux) is a predictable state container for JavaScript apps.
* [ react-redux ](https://www.npmjs.com/package/react-redux) is a React bindings for Redux.
* [ redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension) is a debugging platform for Redux apps.
* [ react-icons ](https://react-icons.github.io/react-icons/) Include popular icons in your React projects easily with react-icons.
# Running the server
To run the server, execute:
```
npm start
```
# components
* Home
* Profile
* Challenges
* Challenge
* Comments
* Solutions
* Signin
* Register
* Forgit
* Users
* ChangePass
* leaderboards

# Router Routes
Path   | Component     |   Permissions     |  Behavior                             
------------- | -----------   |  -----------   |  -----------      
/          | Home      |     visitor  |  Home page,link to /challenge/:level                 
/leaderbord          | Leaderbord      |  user  | navigate to leaderbord profile 
/challenges        | Challenges    |  admin |show all challenge,navigate to challenge bage                                
/challenge/:level        | Challenge    |  user |link to comment bage navigate to soulutions when to run                              
/signin           | Signin      | visitor |Login form, link to register, navigate to homepage after login
/register           | Register      |  visitor |Register form, link to login, navigate to log in page after register
/forgit           | Forgit      |  visitor   | forgit form, link to login, navigate to changepass after send              
/change           | Change    |  visitor   |change form,, link to login, navigate to login after send                        
/profile/:id          | Profile      |  user |Multiple forms
/logout           |  Logout  | user   | navigate to home page                           
/users           | Users  |  admin    | show all users,navegate to user profile when click on user div                   
/comment/challId          | Comment  | user  | comment form,navigate to challeng page when click back to challenge                     
/solution/challId           | Soulution  | user  | navegate to next challenge when click next challenge                    


# UML

![uml-Frontend%20(1) img](https://github.com/MP-Project-Nouf/client/blob/main/uml-Frontend%20(1).png)

# Wireframe
## Home page
![home img](https://github.com/MP-Project-Nouf/client/blob/main/home.png)

## profile page
![profile img](https://github.com/MP-Project-Nouf/client/blob/main/profile.png)

## challenges page
![challenge img](https://github.com/MP-Project-Nouf/client/blob/main/challenge.png)

## challenge page
![oneChalleng img](https://github.com/MP-Project-Nouf/client/blob/main/oneChalleng.png)

## comment page
![comment img](https://github.com/MP-Project-Nouf/client/blob/main/comment.png)

## solutions page
![solutions img](https://github.com/MP-Project-Nouf/client/blob/main/solutions.png)

## register page
![register img](https://github.com/MP-Project-Nouf/client/blob/main/register.png)

## signin page
![signin img](https://github.com/MP-Project-Nouf/client/blob/main/signin.png)

## forgitpass page
![forgit img](https://github.com/MP-Project-Nouf/client/blob/main/forgit.png)

## changepass page
![changepass img](https://github.com/MP-Project-Nouf/client/blob/main/changepass.png)

## users page
![users img](https://github.com/MP-Project-Nouf/client/blob/main/users.png)

## leaderboards page
![leaderboards img](https://github.com/MP-Project-Nouf/client/blob/main/leaderboards.png)


