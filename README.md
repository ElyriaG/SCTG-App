# SCTG-App

>Coding Exercise
Our hope is that we get a better sense of your coding abilities and style. Your submission will be in the form of a public Github.
### GitHub link to app: https://github.com/ElyriaG/SCTG-App
### The application is deployed at: https://sctg-app.herokuapp.com/

This app was created using JavaScript, JQuery, Node.js, AJAX, Express, Bootstrap, and HTML/CSS on VS Code. 

 
 
### **To Run:**
Clone or download from: https://github.com/ElyriaG/SCTG-App.git

In the terminal, run `npm install`, that will install all the dependencies for you. Once finished, once again in the terminal, run `node server.js`, this will start the app at http://localhost:8080/ on your browser. 

### What I would do next:
- I spent all of the time on the client side trying to connect to the AccuWeather API as well as finding out a way to link two AJAX calls together, but could not get it to work as AccuWeather would only return an error. I would experiment with setting both AJAX calls in functions and calling them with the press of one button. If that does not work, then I'd attempt to insert a delay between the two calls. 
- I would also cache data for an hour and return it, assuming I would push it to MySQL and returned from there.
-I would organize the app better. The JavaScript would ideally be in its own file. Plus there is quite a lot of repetition with the links.  
- Last thing would be to hide the API key in a .env file through the .gitignore file. 
