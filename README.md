# Github Discovery App (Sword Health Code Challenge)


##  ⚠️ Currently needs to fixing some issues! ⚠️

- Users can't bookmark repositories - the Star button can be selected but it don't bookmark the repo;
- Sort by dropdown - it works, but affects all the repos instead of each category separately;
- Implementation of cypress integration tests - I wrote a few but I didn't test it;
- Success message missing when the user updates his account with success;
- Most of the Media queries implementation is missing (it was just because lack of time to do it until the deadline)
- API requests extremely slow (around 14 seconds);
- Some Design issues;



Sword Health Techical challenge where I was challanged to to build a Github repository discovery website with layouts inspired by Netflix, where users login to their accounts and see the popular repositories from Github by different topics.
The user is able to do the sign in/sign up on the website, if the login is made with sucess the user will be able to visualize the github discovery page, where he is able to toggle the topics to show, sort the repos by dropdown (start, fork, last update). When the user click on a repository card, it will open in a new tab. The user is able to edit is personal info (username (required) and email). All the user options (categories, sort and account updates) persist locally.


[![Netlify Status](https://api.netlify.com/api/v1/badges/8cf5e631-0a68-4286-b4d5-c3e021ab4cff/deploy-status)](https://githubdiscovery-vanessa.netlify.app/) 
 
## API

[GITHUB REST API]

## Instructions to use:

Follow this steps:

### Clone this repo:

`https://github.com/epicnessinha/Github-Discovery.git`

### Install npm package:

### `npm install`

### Run the app:

### 1. `npm start` and in another terminal `json-server --watch db.json` 
### or
### 2.`run json-server --watch db.json` and open [Netfly](https://githubdiscovery-vanessa.netlify.app/) 

Runs the app in the development mode.\
Opens [http://localhost:3000](http://localhost:3000) to view it in your browser 

### `Credentials to Login:`
- Username: sword
- Password: Sword12345

### `npx cypress open`

Runs intregations tests with cypress.

### Endpoints:

- "/"
- "/discovery"
- "/my-account"
- "/login

## Author contact: 

[Vanessa Ferreira](https://www.linkedin.com/in/vanessabio/)


## License
[MIT](https://choosealicense.com/licenses/mit/)


