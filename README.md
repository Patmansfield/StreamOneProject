# Stream One Project

## Overview

### What is this app for?

This is a Project for Stream One to demonstrate the skills and knowledge aquired throughout the course. 

### What does it do?

A website constructed for the band Coldplay, detailing current music and videos as well as fasicilate booking enquires for weddings and parties.
 
### How does it work?

The app is a Single Page Application using the AngularJS framework as well as Bootstrap front-end framework.

## Features

The single page application I used here allows fast and easy movement between pages. In terms of functionality I modified the navbar to make it static and always placed at the top of the page to make returning to the home page quick and easy and without any scrolling. The banner on the home page was modified to remove a large section when navigating to another page, this made using and viewing the page more stream lined as it was no longer required to scroll past the entire picture in order to view the new content of the page. I used some pre constructed code for Twitter Bootsrap which I have modified for the purpose of my website. I have modified the footer images to include different Ionicon images as well as adding an additional CDN.

## Testing and Deployment

I have incorporated a testing tool using Jasmine, I constructed my spec.js file to test the routing when navigating through out the site. Once the web site was completed and had been hosted over a local server via http server for initial viewing I then created a repository in GitHub pages and push the relevant files to the repository. Once the necessary paths had been altered the site was then deployed for viewing by gh-pages.

## Tech Used

### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
 
## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)