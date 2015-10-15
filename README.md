# URL Shortener written in ReactJS
App for shortening URLs

Install
-------
First you have to install dependencies:
 - nodejs: https://nodejs.org/
curl --silent --location https://rpm.nodesource.com/setup | bash -
yum -y install nodejs 
to check: node 
to exit: cntr+C, cntr+C

 - npm: https://www.npmjs.com/
to check package manager: npm

The next step is to install webpack package globally:
```bash
sudo npm install -g webpack
```
Clone GitHub repo:
```bash
git clone git@github.com:taydakov/url-shortener
```
Go into the cloned directory and now you can install all the dependencies for the project
```bash
cd url-shortener
npm install
```
The next step is a bit silly but required for proper function of the app:
```bash
mkdir ./build
```
So the last step is to run compilation (in watch mode for development):
```bash
webpack --watch
```
The compiled code is at ./build directory, use Apache or any other web server to serve files from the ./build directory

How To Create New Component
----------------
Steps to create new component:

1. Create new React component in /components folder
2. Write render function for the React component that renders the way you want it to see
3. Create new store in /stores folder
4. Write logic for the store and use mock data inside store without API requests
5. Integrate ReactJS and store together through VenyooApp
6. Create function for WebUtils that retrieves data
7. Create action handlers in the store that updates its state accordingly
